function* createIdGenerator(){
    for (let i = 0; i < Infinity; i++) { 
        yield i;       
    }
}
let start = 0;
document.body.style.fontSize = '14pt';
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

const fontGeneratorUp = newFontGenerator("up");
const fontGeneratorDown = newFontGenerator("down");

const up = document.querySelector('#up');
const down = document.querySelector('#down');

up.addEventListener('click', ()=>{
    document.body.style.fontSize = `${fontGeneratorUp.next().value}pt`;
})

down.addEventListener('click', ()=>{
    document.body.style.fontSize = `${fontGeneratorDown.next().value}pt`;
})

const idGenerator = createIdGenerator();

const generator = document.querySelector('#generator');
generator.addEventListener("click", ()=>{
    console.log(idGenerator.next().value);
})
