const BASE_URL = 'https://workona.com';
const el = document.getElementById('iframe');
const generateUrl = (qs) => {
  return `${BASE_URL}/ext/popup?${qs || Math.floor(Date.now() / (60 * 60 * 1000))}`;
};
if (el) {
  el.src = generateUrl();
}
window.addEventListener('message', (e) => {
  if (!e.data) { return; }
  if (e.data.closeWindow) {
    window.close();
    return;
  }
  if (el) {
    if (e.data.height) {
      el.style.height = `${e.data.height}px`;
    }
    if (e.data.width) {
      el.style.width = `${e.data.width}px`;
    }
  }
}, false);

const sendMessage = (msg) => new Promise((resolve, reject) => {
  chrome.runtime.sendMessage(msg, (res) => {
    if (chrome.runtime.lastError) {
      reject(chrome.runtime.lastError);
    } else if (res && res.error) {
      reject(res.error);
    } else {
      resolve(res && res.data);
    }
  });
});

const checkPrompt = async () => {
  let activationUrl = null;
  let isManagedWindow = false;
  let windowId = null;
  try {
    [isManagedWindow, windowId] = await sendMessage({
      method: 64, // ExtensionMessage.IS_CURRENT_WINDOW_MANAGED
    });
  } catch (e) {
    if (e.activationUrl) {
      activationUrl = e.activationUrl;
    } else {
      throw e;
    }
  }

  if (isManagedWindow) {
    return false;
  }

  // render overlay prompting use to turn current window into a managed one
  const prompt = document.getElementById('openPrompt');
  const promptBtn = document.getElementById('openPromptButton');
  const loading = document.getElementById('loading');
  const heading = document.getElementById('heading');
  const subheading = document.getElementById('subheading');
  if (!prompt || !promptBtn || !loading || !heading || !subheading) {
    return false;
  }

  heading.innerText = activationUrl ? 'Activation required' : 'Grant access';
  subheading.innerText = activationUrl
    ? 'To manage tabs with Workona, you’ll need to activate the extension.'
    : 'Add a workona.com tab to manage the tabs in this browser window.';
  promptBtn.innerText = activationUrl ? 'Activate Workona' : 'Add Workona.com tab';

  prompt.style.display = 'flex';
  promptBtn.focus();
  const interval = setInterval(async () => {
    promptBtn.focus();
  }, 100);

  promptBtn.addEventListener('click', () => {
    clearInterval(interval);

    if (activationUrl) {
      chrome.tabs.create({
        active: true,
        url: activationUrl,
      }, () => {
        window.close();
      });

      return;
    }

    loading.style.display = 'flex';
    prompt.style.display = 'none';

    chrome.tabs.create({
      active: false,
      pinned: true,
      url: `${BASE_URL}/0/`,
      windowId: windowId,
    }, () => {
      if (chrome.runtime.lastError) {
        window.close();
        return;
      }

      setTimeout(() => {
        // refresh
        if (el) {
          el.src = generateUrl(Date.now());
        }

        setTimeout(() => {
          loading.style.display = 'none';
        }, 1000);
      }, 2000);
    });
  }, false);

  // check again after 600ms in case window just focused
  await new Promise((resolve) => {
    setTimeout(resolve, 600);
  });
  const [isManagedWindow2] = await chrome.extension.getBackgroundPage()
    .isCurrentWindowManagedByWorkona();

  if (isManagedWindow2) {
    clearInterval(interval);
    prompt.style.display = 'none';
    loading.style.display = 'none';
  }

  return true;
};

const onInit = async () => {
  const promptShown = await checkPrompt();
  if (!promptShown) {
    // check again after 600ms in case window just focused
    await new Promise((resolve) => {
      setTimeout(resolve, 600);
    });
    await checkPrompt();
  }
};

onInit()
  .catch(console.error);
