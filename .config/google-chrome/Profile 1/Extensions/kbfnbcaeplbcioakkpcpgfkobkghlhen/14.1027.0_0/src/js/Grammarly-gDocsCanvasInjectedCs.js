var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{m:()=>F});class n{constructor(e,t,n,r){this._customInboundEventName=t,this._customOutboundEventName=n,this._wrapOutboundMessage=r,this.inbound={subscribe:e=>{const t=({detail:t})=>{const n=t;e&&("function"==typeof e?e(n):e.next&&e.next(n))};return this._target.addEventListener(this._customInboundEventName,t,!1),{unsubscribe:()=>this._target.removeEventListener(this._customInboundEventName,t,!1)}}},this.outbound=e=>{const t=this._wrapOutboundMessage?this._wrapOutboundMessage(e):e,n=new CustomEvent(this._customOutboundEventName,{bubbles:!0,cancelable:!0,detail:t});this._target.dispatchEvent(n)},this._target=e.defaultView||e}}function r(e,t,n){return{call(r,o,i,a){var s;const l=a(i),c=null===(s=t.postFn)||void 0===s?void 0:s[o];if(c)try{c(r,e,i,l)}catch(e){n.logException(`proxy.call.${String(o)}`,e)}return l},set(r,o,i,a){var s;const l=null===(s=t.overrideSet)||void 0===s?void 0:s[o];if(l)try{const t=l(r,e,i);if(void 0!==t)return a(t)}catch(e){n.logException(`proxy.set.${String(o)}`,e)}return a(i)}}}function o(e){const t=/^(?:([\d\w]+) )?(?:(\w+) )?([\d\.]+)px (?:[\'\"])?([\w \-]+)(?:[\'\"])?$/.exec(e);if(t){const[e,n,r,o,i]=t;let a="400",s="normal";return n&&(isNaN(parseInt(n,10))?"italic"===n?(s="italic",a=isNaN(parseInt(r,10))?"bold"===r?"700":"400":r):a="bold"===n?"700":"400":(a=n,s=r||s)),`${a} ${s} ${parseFloat(o).toFixed(4)}px "${i}"`}return e}var i;function a(e,t,n){const r=new DOMPoint(e,t).matrixTransform(n);return{left:r.x,top:r.y}}function s(e,t){return t.a*e}function l(e,t){return t.d*e}function c(e,t,n,r,o=!1){const i=(e,t,n,r=!1)=>{e.beginPath(),e.strokeStyle=`rgba(0,0,255,${r?.05:.2})`,e.lineWidth=2,e.moveTo(t,n),e.lineTo(t,n-20),e.stroke()};e.save(),e.resetTransform(),i(e,t,n,o),r.forEach((r=>i(e,t+r,n,o))),e.restore()}!function(e){e.text="text",e.space="space",e.lineBreak="lineBreak",e.pageBreak="pageBreak"}(i||(i={}));const u=(e,t,n,r,o,i=0,a=0,s=!1)=>{e.save(),e.resetTransform(),e.fillStyle=`rgba(221,0,0,${s?.05:.1})`,e.fillRect(t,n,r,10),e.fillStyle=`rgba(221,0,0,${s?.4:.8})`,e.font="10px Arial",e.fillText(`${i}`,t,n+10),e.fillStyle=`rgba(0,128,221,${s?.4:.8})`,e.fillText(`${a}`,t,n+20),c(e,t,n,o,s),e.restore()},d=(e,t,n,r,o,i=!1)=>{e.save(),e.resetTransform(),e.fillStyle=`rgba(0,221,0,${i?.05:.1})`,e.fillRect(t,n+10,r,10),e.restore(),c(e,t,n,o,i)},p=(e,t,n,r=!1)=>{e.save(),e.resetTransform(),e.beginPath(),e.strokeStyle=`rgba(0,221,0,${r?.05:.1})`,e.lineWidth=5,e.moveTo(t+2.5,n),e.lineTo(t+2.5,n+10),e.lineTo(t-10,n+10),e.stroke(),e.restore()},g=(e,t,n,r)=>{e.save(),e.resetTransform(),e.font="12px Arial",e.fillStyle="rgba(0,128,221,0.8)",e.fillText(`${r}`,t,n),e.restore()};function h(e){return(t,n)=>{const r=function(e,t,n){const r=n.slice(0);return r[0]===e?(r.shift(),0===r.length?{shouldStart:!0,newPageCandidate:t.slice(0)}:{shouldStart:!1,newPageCandidate:r}):r.length<t.length?{shouldStart:!1,newPageCandidate:t.slice(0)}:{shouldStart:!1,newPageCandidate:r}}(e,n.newPageRoutine,n.newPageCandidate);r.shouldStart?function(e,t){t.wordCounter={main:0,footer:0,header:0};const n=(r=t.getCurrentPageAttrs(),{...r,sections:{main:{fragments:[],length:0},header:{fragments:[],length:0},footer:{fragments:[],length:0}}});var r;t.currentPageMap=n,t.currentSelection=[],t.pageCleared=!0,t.newPageRoutine=m.slice(0),t.newPageCandidate=m.slice(0),t.clipCandidate={clip:null,clipCandidate:b.slice(0)},t.savedClipStates=[],t.currentClips=[],t.matchingBroken=!1,t.pagesMap.set(n.number,n),t.hasSuggestions=!1;const o=Array.from(t.pagesMap.values()).reduce(((e,t)=>e+(t.number<n.number?t.sections.main.length:0)),0);if(t.debugVizualize){const t=a(20,20,e.getTransform());g(e,t.left,t.top,`Text starts at: ${o}`)}}(t,n):n.newPageCandidate=r.newPageCandidate}}function f(e){return(t,n,r)=>{const o=function(e,t,n,r,o){var i,a,s,l;const c=r.slice(0);return c[0]===e?(c.shift(),0===c.length?{clip:t,clipCandidate:c.slice(0),clipWasSet:!0}:{clip:"rect"===e&&o?{left:null!==(i=o[0])&&void 0!==i?i:0,top:null!==(a=o[1])&&void 0!==a?a:0,width:null!==(s=o[2])&&void 0!==s?s:0,height:null!==(l=o[3])&&void 0!==l?l:0}:t,clipCandidate:c.slice(0),clipWasSet:!1}):c.length<n.length?{clip:null,clipCandidate:n.slice(0),clipWasSet:!1}:{clip:t,clipCandidate:c,clipWasSet:!1}}(e,n.clipCandidate.clip,n.clipRoutine,n.clipCandidate.clipCandidate,r);o.clipWasSet&&o.clip?(n.currentPageClip||(n.currentPageClip=o.clip),n.currentClips.push(o.clip)):n.clipCandidate={clip:o.clip,clipCandidate:o.clipCandidate}}}const m=["clearRect","save","scale"],b=["beginPath","rect","clip"];function C(e,t,n,r,c,g){var h,f;if(!function(e,t){return!!e.currentPageMap||(e.api.log(t,"Current page map expected"),!1)}(c,"proxy.processFillText"))return;const{api:m,currentPageMap:b,metricsMap:C}=c,y=g.getTransform(),v=a(t,n,y),w=e.substr(1,e.length-2)||"",N="footer"===r?b.sections.footer:"header"===r?b.sections.header:b.sections.main,T=o(null!==(h=c.font)&&void 0!==h?h:g.font),_=N.fragments[N.fragments.length-1];if(_&&_.type===i.text){const e={top:_.top+_.height,left:_.left},t=v.left-e.left-_.width;e.top-v.top<5&&t>1&&(N.fragments.push({type:i.space,left:e.left+_.width,top:_.top,width:t,height:_.height}),N.length++,c.debugVizualize&&d(g,e.left+_.width,v.top,t,[],"main"!==r)),v.top-e.top>5&&(N.fragments.push({type:i.lineBreak,left:e.left+_.width,top:_.top,height:_.height}),N.length++,c.debugVizualize&&p(g,_.left+_.width,_.top,"main"!==r))}const x=e=>{c.matchingBroken||(c.matchingBroken=!0,m.log("proxy.fillText","matching is broken",{chunk:e,fontStyle:T,targetFont:c.font}))},E=C.get(T);if(!E)return void x(null);const S=E.get("M");if(!S)return void x("M");const P=v.top-l(S.chunk.actualBoundingBoxAscent,y),A=l(S.chunk.actualBoundingBoxAscent+S.chunk.actualBoundingBoxDescent,y),O=null!==(f=w.match(/[^\s]+|\s+/g))&&void 0!==f?f:[];for(const e of O){const t=E.get(e);if(!t){x(e);continue}const n=s(t.chunk.width,y),o={top:P,left:v.left,type:i.text,text:e,width:n,height:A,charShifts:t.charShifts.map((e=>s(e.width,y)))};N.fragments.push(o),c.debugVizualize&&(e.match(/^\s+$/)?d(g,v.left,v.top,n,o.charShifts,"main"!==r):u(g,v.left,v.top,o.width,o.charShifts," "===e?void 0:c.wordCounter[r]++," "===e?void 0:N.length,"main"!==r)),N.length+=e.length,v.left+=n}}const y=h("clearRect"),v=h("save"),w=f("wrong"),N={postFn:{fillText(e,t,[n,r,o,i]){w(e,t),!function(e){const{currentClips:t,currentPageClip:n}=e;if(t.length&&n){const e=t[t.length-1],r=n;return e.left===r.left&&e.top===r.top&&e.width===r.width&&e.height!==r.height}return!1}(t)?!function(e){const{currentClips:t,currentPageClip:n}=e;if(t.length&&n){const e=t[t.length-1],r=n;return e.left===r.left&&e.top!==r.top&&e.width===r.width&&e.top-r.top+e.height===r.height}return!1}(t)?C(n,r,o,"main",t,e):C(n,r,o,"footer",t,e):C(n,r,o,"header",t,e)},fillRect(e,t,[n,r,o,i]){w(e,t),"rgba(118, 167, 250, 0.501960784313726)"===e.fillStyle&&t.currentSelection.push({left:n,top:r,width:o,height:i})},clearRect(e,t){w(e,t),y(e,t)},save(e,t){t.saveCount++,w(e,t),v(e,t),function(e){e.currentClips.length&&e.savedClipStates.push(e.currentClips.slice())}(t)},scale:h("scale"),restore(e,t){!function(e){e.savedClipStates.length?e.currentClips=e.savedClipStates.pop():e.currentClips=[]}(t),t.saveCount--,0===t.saveCount&&t.currentPageMap&&(t.hasSuggestions&&t.onChangeMode("suggest"),t.onRender({pageMap:{...t.currentPageMap},selection:t.currentSelection}))},beginPath:f("beginPath"),clip:f("clip"),rect:f("rect")},overrideSet:{strokeStyle:(e,t,n)=>"rgba(221,0,0,1)"===n||"rgba(66,133,244,1)"===n?"rgba(0,0,0,0)":void 0,fillStyle:(e,t,n)=>"rgba(252,232,230,1)"===n||"rgba(232,240,254,1)"===n?"rgba(0,0,0,0)":void("rgba(31,161,93,1)"===n&&(t.hasSuggestions=!0)),font(e,t,n){t.font=n}}},T=new Set(["version","title","lang","translate","dir","dataset","hidden","tabIndex","accessKey","draggable","spellcheck","contentEditable","isContentEditable","offsetParent","offsetTop","offsetLeft","offsetWidth","offsetHeight","style","innerText","outerText","onabort","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onresize","onscroll","onseeked","onseeking","onselect","onstalled","onsubmit","onsuspend","ontimeupdate","ontoggle","onvolumechange","onwaiting","onwheel","ongotpointercapture","onlostpointercapture","onpointerdown","onpointermove","onpointerup","onpointercancel","onpointerover","onpointerout","onpointerenter","onpointerleave","click","focus","blur","onauxclick","nonce","namespaceURI","prefix","localName","tagName","id","className","classList","slot","attributes","shadowRoot","assignedSlot","innerHTML","outerHTML","scrollTop","scrollLeft","scrollWidth","scrollHeight","clientTop","clientLeft","clientWidth","clientHeight","onbeforecopy","onbeforecut","onbeforepaste","oncopy","oncut","onpaste","onsearch","onselectstart","previousElementSibling","nextElementSibling","children","firstElementChild","lastElementChild","childElementCount","onwebkitfullscreenchange","onwebkitfullscreenerror","setPointerCapture","releasePointerCapture","hasPointerCapture","hasAttributes","getAttributeNames","getAttribute","getAttributeNS","setAttribute","setAttributeNS","removeAttribute","removeAttributeNS","hasAttribute","hasAttributeNS","getAttributeNode","getAttributeNodeNS","setAttributeNode","setAttributeNodeNS","removeAttributeNode","closest","matches","webkitMatchesSelector","attachShadow","getElementsByTagName","getElementsByTagNameNS","getElementsByClassName","insertAdjacentElement","insertAdjacentText","insertAdjacentHTML","requestPointerLock","getClientRects","getBoundingClientRect","scrollIntoView","scrollIntoViewIfNeeded","createShadowRoot","getDestinationInsertionPoints","animate","remove","querySelector","querySelectorAll","webkitRequestFullScreen","webkitRequestFullscreen","scroll","scrollTo","scrollBy","before","after","replaceWith","prepend","append","ELEMENT_NODE","ATTRIBUTE_NODE","TEXT_NODE","CDATA_SECTION_NODE","ENTITY_REFERENCE_NODE","ENTITY_NODE","PROCESSING_INSTRUCTION_NODE","COMMENT_NODE","DOCUMENT_NODE","DOCUMENT_TYPE_NODE","DOCUMENT_FRAGMENT_NODE","NOTATION_NODE","DOCUMENT_POSITION_DISCONNECTED","DOCUMENT_POSITION_PRECEDING","DOCUMENT_POSITION_FOLLOWING","DOCUMENT_POSITION_CONTAINS","DOCUMENT_POSITION_CONTAINED_BY","DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC","nodeType","nodeName","baseURI","isConnected","ownerDocument","parentNode","parentElement","childNodes","firstChild","lastChild","previousSibling","nextSibling","nodeValue","textContent","hasChildNodes","getRootNode","normalize","cloneNode","isEqualNode","isSameNode","compareDocumentPosition","contains","lookupPrefix","lookupNamespaceURI","isDefaultNamespace","insertBefore","appendChild","replaceChild","removeChild","addEventListener","removeEventListener","dispatchEvent"]),_=["autocorrect","comment","composing_decoration","composing_region","draft_comment","ignore_spellcheck","ignore_word","import_warnings","link","named_range","revision_diff","smart_todo","spellcheck","suppress_feature","text","voice_corrections","voice_dotted_span","autogen","cell","citation_sources","column_sector","date_time","document","equation","equation_function","footnote","headings","horizontal_rule","language","list","paragraph","row","tbl"],x=[61439,61438,59651,26,30,59649,3,59653,59652,16,17],E=[47,91,61439,61438,59651,26,30,59649,3,59653,59652,16,17,93,47,103].reduce(((e,t)=>e+String.fromCharCode(t)),""),S=[47,91,28,3,59653,59651,26,25,31,92,110,18,16,93,47,103].reduce(((e,t)=>e+String.fromCharCode(t)),"");class P extends Error{constructor(e){super(`Assertion failed: ${e?"string"==typeof e?e:e():"(unnamed)"}`)}}function A(e,t){if(null==e)throw new P((()=>t?`Expected ${t} to be non-null`:"Expected non-null"));return e}function O(e,t,n,r=Object.getOwnPropertyNames(e)){const o=new Set,i=[];let a=0;const s=(r,l,c,u=0)=>{if(a++,"prototype"===r||l instanceof Window)return;if(u>n)return;const d=[...c,r];try{if(t(r,l))return void i.push({path:d,value:l})}catch(e){}var p;if(null!=l&&!o.has(l))if(o.add(l),Array.isArray(l))l.forEach(((e,t)=>{try{s(t.toString(),e,d,u+1)}catch(e){}}));else if(l instanceof Object){((p=l)&&null!==p&&1===p.nodeType&&"string"==typeof p.nodeName?Object.getOwnPropertyNames(e).filter((e=>!T.has(e))):Object.getOwnPropertyNames(l)).forEach((e=>{try{s(e,l[e],d,u+1)}catch(e){}}))}};return r.forEach((t=>{try{s(t,e[t],[])}catch(e){}})),{results:i,iterations:a}}function M(e){const t=A(Object.getOwnPropertyNames(e).find((e=>-1!==e.toString().indexOf("_kixApp")))),n=A(e[t],"kixApp"),r=function(e,t){const n=new Set;return e.filter((e=>{const r=t(e);return!n.has(r)&&(n.add(r),!0)}))}(O(n,((e,t)=>t&&""===t.toString().charAt(0)),5).results,(e=>e.value)).filter((e=>isNaN(parseInt(e.path[e.path.length-1],10)))).reduce(((e,r)=>{const o=r.path.slice(0,r.path.length-1).reduce(((e,t)=>e[t]),n),i=O(o,((e,t)=>t instanceof RegExp),1);let a=!1,s=!1;if(1===i.results.length){const e=i.results[0].value;a=e.toString()===S,s=e.toString()===E}else{1===O(o,((e,t)=>Array.isArray(t)&&t.length===x.length&&t.every(((e,t)=>e.charCodeAt(0)===x[t]))),1).results.length&&(s=!0)}return a?{...e,headersAndFooters:[t].concat(r.path)}:s?{...e,text:[t].concat(r.path)}:e}),{text:[],headersAndFooters:[]});return 0===r.text.length?null:r}class I{constructor(e){this._win=e,this._result=null}_attemptTextExtraction(){try{const e=M(this._win),t=Boolean(null==e?void 0:e.headersAndFooters.length),n=(null==e?void 0:e.text)||[],r=n.pop(),o=n.reduce(((e,t)=>e[t]),this._win),i=(null==e?void 0:e.headersAndFooters)||[],a=i.pop(),s=i.reduce(((e,t)=>e[t]),this._win);if(n.length>0){const{suggestionsFullArrayPath:e,suggestionFastArrayPath:i}=function(e,t){try{const n=A(Object.getOwnPropertyNames(e).find((e=>-1!==e.toString().indexOf("_kixApp")))),r=O(A(e[n],"kixApp"),((e,t)=>t&&Array.isArray(t)&&t.some((e=>Array.isArray(e)&&-1!==e.toString().indexOf("suggest.")))),10).results.filter((e=>e.path[0]===t[1])).filter((e=>!_.some((t=>e.path.includes(t))))).map((e=>{const t=[...e.path];return t.pop(),t})).reduce(((t,r)=>{const o=[n].concat(r).reduce(((e,t)=>e[t]),e);return t?o[t.idProp]>t.id?{...t,id:o[t.idProp],path:r}:t:Object.getOwnPropertyNames(o).reduce(((e,t)=>Array.isArray(o[t])||isNaN(parseInt(o[t],10))?Array.isArray(o[t][0])?{...e,fullArrayProp:t}:{...e,compactArrayProp:t}:{...e,idProp:t,id:o[t]}),{path:r})}),null);return{suggestionFastArrayPath:r?[n].concat(r.path,r.compactArrayProp):null,suggestionsFullArrayPath:r?[n].concat(r.path,r.fullArrayProp):null}}catch(e){return{suggestionFastArrayPath:null,suggestionsFullArrayPath:null}}}(this._win,n),l=Array.isArray(e)&&e.pop(),c=Array.isArray(i)&&i.pop(),u=e&&e.reduce(((e,t)=>e[t]),this._win);return{getText:()=>{const e=o[r],n=t?s[a]:"",i=u&&l&&u[l],d=u&&c&&u[c];if("string"==typeof e){if(i&&d){let t=!1,r=0;return{checkableText:d.concat([e.length-1]).reduce(((n,o)=>{let a=n;return t||(a+=e.slice(r,o)),t=!(!i[o]||!i[o][0]),r=o,a}),""),fullText:e,headersAndFootersText:n,ignoredRanges:[...i].reduce(((e,t)=>(e.push(Array.isArray(t)?!!t[0]:!!e.length&&e[e.length-1]),e)),[])}}return{checkableText:e,fullText:e,headersAndFootersText:n,ignoredRanges:[]}}throw new Error("unexpected text value type")},gotIgnoredRanges:!!u}}return{error:"notFound"}}catch(e){return{error:"exception",message:e.message}}}_getText(e){try{return this._result||(this._result=this._attemptTextExtraction()),e.reQueryForIgnoredRanges&&"getText"in this._result&&!this._result.gotIgnoredRanges&&(this._result=this._attemptTextExtraction()),"getText"in this._result?this._result.getText():null}catch(e){return null}}getText(e){return this._getText(e)}}Error;var k;!function(e){function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}e.create=function(){return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}}(k||(k={}));void 0!==self.requestIdleCallback&&self.requestIdleCallback;var R;!function(e){function t(e){return new Promise(e)}e.create=t,e.createCompletionSource=function(){let e,t;return{promise:new Promise(((n,r)=>{e=n,t=r})),resolve(t){e(t)},reject(e){t(e)}}},e.sync=function(e){return t(((t,n)=>t(e())))},e.delay=function(t){return e.create((e=>{setTimeout((()=>{e()}),t)}))}}(R||(R={}));Error;class D{constructor(e,t){this._transport=e,this._log=t,this._calls=new Map,this._sub=this._transport.inbound.subscribe((e=>{var t;const n=this._calls.get(e.id);if(n)try{"err"in e?n.reject(e.err):n.resolve(e.res)}finally{this._calls.delete(e.id)}else null===(t=this._log)||void 0===t||t.warn(`received rpc call response for unregistered call ${e.id}`)})),this.api=new Proxy({},{get:(e,t)=>"then"===t?void 0:(...e)=>this._handleCall(t,e)})}_handleCall(e,t){let n=k.create();for(;this._calls.has(n);)n=k.create();const r=R.createCompletionSource();return this._calls.set(n,r),this._transport.outbound({id:n,method:e,args:t}),r.promise}dispose(){this._sub.unsubscribe()}}!async function(){try{const e=document.documentElement.dataset.grGdcConnId;if(!e)return void console.error("Could not start grammarly integration","no connection found");const{addMiddleware:t,textMeasuringState:n}=await import("./Grammarly-gDocsEarlyInjectedCs.js");F(e)(t,n)}catch(e){console.error("Could not start grammarly integration","module not loaded",e)}}();const F=e=>(t,o)=>{const{request:i,response:a}=function(e){return{request:`cs-grm-request-${e}`,response:`cs-grm-response-${e}`}}(e),s=new D(new n(document,a,i)),l=new Map;!async function(){try{const e=document.querySelector(".kix-rotatingtilemanager");if(!e)throw new Error("Cannot find rotating tile manager");const n=function(){const e=[];function t(t,n){e[t]=n}return{identifyPage(n,r){const o=n.top+n.height+18>=r.height;let i=0,a=-1;for(;i<=n.top;){if(i+18>n.top)return t(a+1,n),o&&e.length>a+2&&e.splice(a+2),{number:a+1,isLastPage:o};if(a++,a>=e.length)break;e[a]&&(i=e[a].top+e[a].height)}return{number:void 0,isLastPage:o}}}}(),i=function(e){const t=new I(self);let n,r=!1,o=!1;const i=new Map;return{onChangeMode(e){n!==e&&(n=e,"suggest"===n&&(r=!1,o=!1,a(e)))},onRender(n){if(r||o){const r=o?null:t.getText({reQueryForIgnoredRanges:!1});e.pageRendered({fullText:r,renderResult:n})}else i.set(n.pageMap.number,n)},init:()=>a(void 0)};function a(n){setTimeout((()=>{if(r||o)return;if(n!=n)return;const a=t.getText({reQueryForIgnoredRanges:!0});if(null===a?(o=!0,e.logError("FullTextExtractor","Cannot get full document text")):r=!0,i.size){const t=i.values();i.clear();for(const n of t)e.pageRendered({fullText:a,renderResult:n})}}),0)}}(s.api);t((t=>{if(function(e){return Boolean(e.className)}(t)){const a=function(e){return{...e,pageCleared:!1,matchingBroken:!1,currentSelection:[],pagesMap:e.pagesMap||new Map,currentPageClip:null,metricsMap:e.metricsMap||new Map,wordCounter:{main:0,footer:0,header:0},newPageRoutine:m.slice(0),newPageCandidate:m.slice(0),clipRoutine:b.slice(0),clipCandidate:{clip:null,clipCandidate:b.slice(0)},saveCount:0,savedClipStates:[],currentClips:[],hasSuggestions:!1}}({api:s.api,metricsMap:o.metricsMap,pagesMap:l,getCurrentPageAttrs(){const r=e.getBoundingClientRect(),{left:o,top:i,width:a,height:l}=t.getBoundingClientRect(),c={left:o-r.left,top:i-r.top,width:a,height:l},{number:u,isLastPage:d}=n.identifyPage(c,r);return void 0===u&&(n.identifyPage(c,r),s.api.logError("pageManager.identifyPage","Cannot identify page number",{rect:c})),{number:null!=u?u:-1,isLastPage:d,canvasBitmapSize:{width:t.width,height:t.height},pageOffsetRect:c}},onChangeMode:i.onChangeMode,onRender:i.onRender});return function({api:e,state:t}){return r(t,N,e)}({api:s.api,state:a})}})),await s.api.init()&&(console.log("Grammarly communication channel has been successfully established."),i.init())}catch(e){try{await s.api.logException("init",e)}catch(e){}}}()};var B=t.m;export{B as startCanvasInjectedApp};