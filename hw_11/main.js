const keyB = document.querySelector("#key_B");
const keyC = document.querySelector("#key_C");
const keyD = document.querySelector("#key_D");
const keyH = document.querySelector("#key_H");
const keyP = document.querySelector("#key_P");

const bird = document.querySelector(`audio[data-key="66"]`);
const cat = document.querySelector(`audio[data-key="67"]`);
const dog = document.querySelector(`audio[data-key="68"]`);
const horse = document.querySelector(`audio[data-key="72"]`);
const pig = document.querySelector(`audio[data-key="80"]`);

keyB.addEventListener('click',function (){
  bird.play();
})

keyC.addEventListener('click',function (){
  cat.play();
})

keyD.addEventListener('click',function (){
  dog.play();
})

keyH.addEventListener('click',function (){
  horse.play();
})

keyP.addEventListener('click',function (){
  pig.play();
})



function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}
function removeTransition(e) {
  if(e.propertyName != 'transform') return; 
  this.classList.remove('playing'); 
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
window.addEventListener('click', playSound);







