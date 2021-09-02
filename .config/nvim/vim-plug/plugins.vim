if empty(glob('~/.config/nvim/autoload/plug.vim'))
  silent !curl -fLo ~/.config/nvim/autoload/plug.vim --create-dirs
    \ https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
  "autocmd VimEnter * PlugInstall
  "autocmd VimEnter * PlugInstall | source $MYVIMRC
endif

call plug#begin('~/.config/nvim/autoload/plugged')
    Plug 'itchyny/lightline.vim'

	"Themes
	Plug 'dracula/vim', { 'as': 'dracula' } 
    Plug 'kyoz/purify', { 'rtp': 'vim' }   
	"gruvbox8
	
    "Airline - I am using Lightline now!
    "Plug 'vim-airline/vim-airline'
    "Plug 'vim-airline/vim-airline-themes'
    Plug 'ryanoasis/vim-devicons'
    Plug 'octol/vim-cpp-enhanced-highlight'

    "Better Syntax Support
	Plug 'sheerun/vim-polyglot'
    "File Explorer
    Plug 'scrooloose/NERDTree'
    " Auto pairs for '(' '[' '{'
    Plug 'jiangmiao/auto-pairs'
    
    "Use release branch (recommend)
    Plug 'neoclide/coc.nvim', {'branch': 'release'}

call plug#end()

