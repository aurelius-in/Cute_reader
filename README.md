# Cute Phonics 🐸🥒 — Baby Animals Reading Game

A tiny phonics game to help an 8-year-old learn to read using cute animals and pickles.  
Runs entirely in the browser. Perfect for GitHub Pages and phones.

## Features
- CVC & digraph levels (short vowels + sh/ch/th)
- Big tap targets for small hands
- 🔊 Uses built-in Text-to-Speech (no internet required after load)
- “Sticker book” rewards with frogs, pickles, and baby animals
- Progress saved in `localStorage`

## Quick Start
1. Download all files into a folder:
   - `index.html`, `style.css`, `data.js`, `game.js`, `README.md`
2. (Optional) Create an `assets/` folder for your own baby animal photos.
3. Open `index.html` on your phone or laptop.

### GitHub Pages
1. Create a new repo, add the files, push `main`.
2. Enable **Settings → Pages → Deploy from branch (main / root)**.
3. Your game will be live at the Pages URL. Share it!

## Add Your Own Photos
Update the `img` values in `data.js` items:
```js
{ word:"duck", phonemes:["/d/","/u/","/k/"], img:"assets/my-duckling.jpg", caption:"duckling" }
