(()=>{'use strict';
const slides=Array.from(document.querySelectorAll('.slide'));let index=0;
const prev=document.getElementById('prevButton');const next=document.getElementById('nextButton');
function show(i){index=Math.min(slides.length-1,Math.max(0,i));slides.forEach((slide,j)=>{slide.classList.toggle('active',i===j);slide.setAttribute('aria-hidden',i!==j?'true':'false')});document.getElementById('slideCount').textContent=String(index+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');document.getElementById('progressFill').style.width=(100*(index+1)/slides.length)+'%';document.getElementById('slideDuration').textContent='約'+slides[index].dataset.duration+'秒';prev.disabled=index===0;next.disabled=index===slides.length-1;window.scrollTo({top:0,behavior:'instant'});}
prev.addEventListener('click',()=>show(index-1));next.addEventListener('click',()=>show(index+1));
document.getElementById('speakerToggle').addEventListener('click',e=>{document.body.classList.toggle('show-notes');e.currentTarget.setAttribute('aria-pressed',document.body.classList.contains('show-notes')?'true':'false')});
document.getElementById('fullToggle').addEventListener('click',()=>{if(document.fullscreenElement){document.exitFullscreen?.()}else{document.documentElement.requestFullscreen?.()}});
document.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='PageDown'){e.preventDefault();show(index+1)}else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();show(index-1)}else if(e.key==='Escape'&&document.fullscreenElement){document.exitFullscreen?.()}});
show(0);
})();
