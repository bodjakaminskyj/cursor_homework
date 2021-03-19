birdSound = document.querySelector('.bird');
catSound = document.querySelector('.cat');
dogSound = document.querySelector('.dog');
horseSound = document.querySelector('.horse');
pigSound = document.querySelector('.pig');
bird = document.querySelector('#bird')
cat = document.querySelector('#cat')
dog = document.querySelector('#dog')
horse = document.querySelector('#horse')
pig = document.querySelector('#pig')

bird.addEventListener('click', function(){birdSound.play()})
cat.addEventListener('click', function(){catSound.play()})
dog.addEventListener('click', function(){dogSound.play()})
horse.addEventListener('click', function(){horseSound.play()})
pig.addEventListener('click', function(){pigSound.play()})

document.addEventListener('keydown', animal)
function animal(e){
  if(e.code ==='KeyB'){
      birdSound.play();
  } 
  else if(e.code === "KeyC"){
    catSound.play();
  }
  else if(e.code === "KeyD"){
    dogSound.play();
  }
  else if(e.code === "KeyH"){
    horseSound.play();
  }
  else if(e.code === "KeyP"){
    pigSound.play()
  }
}
