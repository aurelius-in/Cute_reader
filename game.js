/* Cute Phonics game logic */

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];

const levels = window.CUTE_PHONICS_DATA.levels;
const stickerSet = window.CUTE_PHONICS_DATA.stickers;

const els = {
  levelSelect: $("#levelSelect"),
  scoreVal: $("#scoreVal"),
  promptImg: $("#promptImg"),
  promptCaption: $("#promptCaption"),
  btnHearWord: $("#btnHearWord"),
  btnHearSounds: $("#btnHearSounds"),
  choices: $("#choices"),
  feedback: $("#feedback"),
  stickerRow: $("#stickerRow"),
  btnReset: $("#btnReset")
};

let state = {
  levelId: null,
  idx: 0,
  score: 0,
  currentItem: null,
  choicePool: [],
  stickers: []
};

const STORAGE_KEY = "cute-phonics-progress-v1";

function loadProgress() {
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return;
    const obj = JSON.parse(raw);
    state.score = obj.score || 0;
    state.stickers = obj.stickers || [];
    els.scoreVal.textContent = state.score;
    renderStickers();
  }catch(e){}
}
function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    score: state.score,
    stickers: state.stickers
  }));
}

function initLevelSelect(){
  levels.forEach(l=>{
    const o = document.createElement("option");
    o.value = l.id; o.textContent = l.label;
    els.levelSelect.appendChild(o);
  });
  const saved = localStorage.getItem("cute-phonics-level") || levels[0].id;
  els.levelSelect.value = saved;
  state.levelId = saved;
  els.levelSelect.addEventListener("change", ()=>{
    state.levelId = els.levelSelect.value;
    localStorage.setItem("cute-phonics-level", state.levelId);
    startRound(true);
  });
}

function pickSticker(){
  // deterministic-ish but fun
  const i = Math.floor(Math.random()*stickerSet.length);
  return stickerSet[i];
}
function renderStickers(){
  els.stickerRow.innerHTML = "";
  state.stickers.forEach(s=>{
    const span = document.createElement("span");
    span.className = "sticker";
    span.textContent = s;
    els.stickerRow.appendChild(span);
  });
}

function speak(text, {rate=0.95, pitch=1.1} = {}){
  if(!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.rate = rate; u.pitch = pitch;
  // Prefer a child-like or female voice if available
  const voices = speechSynthesis.getVoices();
  const preferred = voices.find(v => /child|female|samantha|victoria|karen|allison|susan|google uk english female/i.test(v.name));
  if(preferred) u.voice = preferred;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

function speakPhonemes(phonemes){
  // e.g., ["/k/","/a/","/t/"] -> say slowly then whole word
  phonemes.forEach((p, idx)=>{
    setTimeout(()=>speak(p.replace(/\//g,""), {rate:0.7, pitch:1.2}), idx*600);
  });
  setTimeout(()=>speak(state.currentItem.word, {rate:0.9, pitch:1.05}), phonemes.length*650 + 150);
}

function shuffle(a){
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function getLevel(){
  return levels.find(l => l.id === state.levelId);
}

function buildChoices(correctWord, level){
  const words = level.items.map(i=>i.word);
  const wrongs = shuffle(words.filter(w=>w!==correctWord)).slice(0, 2);
  return shuffle([correctWord, ...wrongs]);
}

function renderPrompt(item){
  // image fallback if missing
  els.promptImg.src = item.img || "https://placekitten.com/400/400";
  els.promptImg.alt = item.caption || item.word;
  els.promptCaption.textContent = item.caption || "Listen and choose the word!";
}

function renderChoices(choices){
  els.choices.innerHTML = "";
  choices.forEach(word=>{
    const b = document.createElement("button");
    b.className = "choice";
    b.textContent = word;
    b.addEventListener("click", ()=> onChoose(word, b));
    els.choices.appendChild(b);
  });
}

function reward(){
  const s = pickSticker();
  state.stickers.push(s);
  state.score += 1;
  els.scoreVal.textContent = state.score;
  renderStickers();
  saveProgress();
}

function flash(el, cls){
  el.classList.add(cls);
  setTimeout(()=>el.classList.remove(cls), 500);
}

function onChoose(word, btn){
  const correct = state.currentItem.word;
  if(word === correct){
    btn.classList.add("correct");
    els.feedback.textContent = "Great job! ⭐";
    reward();
    setTimeout(()=> startRound(), 600);
  }else{
    btn.classList.add("wrong");
    flash(els.promptImg, "wrong");
    els.feedback.textContent = "Try again!";
    speak(correct, {rate:0.95, pitch:1});
  }
}

function nextItem(level){
  const i = Math.floor(Math.random()*level.items.length);
  state.idx = i;
  return level.items[i];
}

function startRound(reset=false){
  const level = getLevel();
  if(!level || !level.items.length) return;

  if(reset) els.feedback.textContent = "";

  const item = nextItem(level);
  state.currentItem = item;
  const choices = buildChoices(item.word, level);
  renderPrompt(item);
  renderChoices(choices);
}

function bindUI(){
  els.btnHearWord.addEventListener("click", ()=>{
    speak(state.currentItem.word);
  });
  els.btnHearSounds.addEventListener("click", ()=>{
    speakPhonemes(state.currentItem.phonemes || []);
  });
  els.btnReset.addEventListener("click", ()=>{
    if(confirm("Reset stickers & score?")){
      state.score = 0;
      state.stickers = [];
      saveProgress();
      els.scoreVal.textContent = "0";
      renderStickers();
      startRound(true);
    }
  });
}

function ready(){
  loadProgress();
  initLevelSelect();
  bindUI();
  // wait a tick to populate voices on some browsers
  setTimeout(()=>startRound(true), 150);
}

// Safari sometimes loads voices asynchronously
if ('speechSynthesis' in window){
  window.speechSynthesis.onvoiceschanged = ()=>{};
}
document.addEventListener("DOMContentLoaded", ready);
