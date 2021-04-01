let start = 0;
document.body.style.fontSize = '14pt';
const fontGeneratorUp = newFontGenerator("up");
const fontGeneratorDown = newFontGenerator("down");

const up = document.querySelector('#up');
const down = document.querySelector('#down');
const idGenerator = createIdGenerator();
const list = document.querySelector('.list');
const generator = document.querySelector('#generator');

function* createIdGenerator(){
    for (let i = 0; i < Infinity; i++) { 
        yield i;       
    }
}

function* newFontGenerator(str){
    start = document.body.style.fontSize.substr(0,2);
    for (let j = start; j < 100; j++) { 
        if(str==='up'){  
            start++; 
            yield start;       
        }
        else if(str==='down'){
            start--
            yield start; }
    }
    }



up.addEventListener('click', ()=>{
    document.body.style.fontSize = `${fontGeneratorUp.next().value}pt`;
})

down.addEventListener('click', ()=>{
    document.body.style.fontSize = `${fontGeneratorDown.next().value}pt`;
})
generator.addEventListener("click", ()=>{
    const item = document.createElement('li');
    item.innerHTML = `№: ${idGenerator.next().value}`;
    list.appendChild(item); 
})
