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
 themeBtn.innerHTML=theme==='dark'?'☀':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.2A8.4 8.4 0 0 1 8.8 3.8a8.6 8.6 0 1 0 11.4 11.4Z"/></svg>';
}
langBtn.addEventListener('click',()=>{lang=lang==='ja'?'en':'ja';save('ye-lang',lang);apply()});
themeBtn.addEventListener('click',()=>{theme=theme==='light'?'dark':'light';save('ye-theme',theme);apply()});
const photo=document.getElementById('profilePhoto');
photo.addEventListener('load',()=>{if(photo.naturalWidth>0)document.querySelector('.photo-wrap').classList.add('has-photo')});
photo.addEventListener('error',()=>{document.querySelector('.photo-wrap').classList.remove('has-photo')});
apply();
})();
