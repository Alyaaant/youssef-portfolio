(()=>{
'use strict';
const root=document.documentElement;
const langBtn=document.getElementById('languageToggle'),themeBtn=document.getElementById('themeToggle');
const storedLang=()=>{try{return localStorage.getItem('ye-lang')}catch{return null}};
const storedTheme=()=>{try{return localStorage.getItem('ye-theme')}catch{return null}};
let lang=storedLang()==='en'?'en':'ja';let theme=storedTheme()==='dark'?'dark':'light';
const save=(key,v)=>{try{localStorage.setItem(key,v)}catch{}};
function apply(){
 root.lang=lang;root.dataset.theme=theme;
 document.querySelectorAll('[data-ja][data-en]').forEach(el=>{
  // Some copy uses basic text; preserve nested HTML only where the element is known safe.
  const value=el.getAttribute('data-'+lang);
  if(!value)return;
  el.textContent=value;
 });
 langBtn.textContent=lang==='ja'?'EN':'日本語';
 langBtn.setAttribute('aria-label',lang==='ja'?'英語に切り替え':'Switch to Japanese');
 themeBtn.setAttribute('aria-label',theme==='dark'?'ライトモードに切り替え':'ダークモードに切り替え');
 themeBtn.innerHTML=theme==='dark'?"<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"ui-theme-icon\" width=\"17\" height=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42\"/></svg>":"<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" class=\"ui-theme-icon\" width=\"17\" height=\"17\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linejoin=\"round\"><path d=\"M20 15a8.5 8.5 0 1 1-11-11A7 7 0 0 0 20 15Z\"/></svg>";
}
langBtn.addEventListener('click',()=>{lang=lang==='ja'?'en':'ja';save('ye-lang',lang);apply()});
themeBtn.addEventListener('click',()=>{theme=theme==='light'?'dark':'light';save('ye-theme',theme);apply()});


const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced){

 // Decorative 3D hero. Disable pointer parallax when the user prefers reduced motion.
 const heroArt=document.querySelector('.hero-visual');
 if(heroArt){
  heroArt.addEventListener('pointermove',e=>{
   if(e.pointerType==='touch')return;
   const r=heroArt.getBoundingClientRect();
   const x=Math.max(-.5,Math.min(.5,(e.clientX-r.left)/r.width-.5));
   const y=Math.max(-.5,Math.min(.5,(e.clientY-r.top)/r.height-.5));
   heroArt.style.setProperty('--mouse-x',(x*5).toFixed(2)+'deg');
   heroArt.style.setProperty('--mouse-y',(-y*4).toFixed(2)+'deg');
  });
  heroArt.addEventListener('pointerleave',()=>{
   heroArt.style.setProperty('--mouse-x','0deg');
   heroArt.style.setProperty('--mouse-y','0deg');
  });
 }

 document.querySelectorAll('.tech-tile').forEach(tile=>{
  tile.addEventListener('pointermove',e=>{
   if(e.pointerType==='touch')return;
   const r=tile.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
   tile.style.setProperty('--tx',`${(-y*7).toFixed(2)}deg`);tile.style.setProperty('--ty',`${(x*8).toFixed(2)}deg`);
   tile.style.setProperty('--gx',`${(x+.5)*100}%`);tile.style.setProperty('--gy',`${(y+.5)*100}%`);
  });
  tile.addEventListener('pointerleave',()=>{tile.style.setProperty('--tx','0deg');tile.style.setProperty('--ty','0deg')});
 });
 const scene=document.querySelector('[data-tech-scene]');
 scene?.addEventListener('pointermove',e=>{
  if(e.pointerType==='touch')return;
  const r=scene.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
  scene.style.setProperty('--gx',`${(x+.5)*100}%`);scene.style.setProperty('--gy',`${(y+.5)*100}%`);
  const orbit=scene.querySelector('.tech-orbit');orbit?.style.setProperty('--rx',`${(13-y*12).toFixed(2)}deg`);orbit?.style.setProperty('--ry',`${(-17+x*20).toFixed(2)}deg`);
 });
}
apply();
})();
