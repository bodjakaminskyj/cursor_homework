const list_characters = document.querySelector('.list_characters');
const list_planets = document.querySelector('.list_planets');
const info = document.querySelector('#get_info');
const planets = document.querySelector('#get_planet');
let page = 1;
info.addEventListener("click", getInfo);
planets.addEventListener("click", getPlanets);
function getPlanets(){
    getPagePlanets(page)
    

}

async function getInfo(){
    let a = document.querySelector('#number_episode').value;
    axios.get(`https://swapi.dev/api/films/${a}`)
    .then((res)=>{        
        list_characters.innerHTML = `<h1 class="title"> Characters </h1>`;
        for (let i = 0; i < res.data.characters.length; i++) {
            axios.get(res.data.characters[i]).then((res)=>{
                const character = document.createElement('div');
                character.className = "character";
                const img = new Image(25, 25);
               
                
                if(res.data.gender==='male')img.src = './images/male.png';
                else if(res.data.gender==='female')img.src = './images/female.png';
                else img.src = './images/none.png';
                character.innerHTML = `
                Name: ${res.data.name};<br>
                Birth_year: ${res.data.birth_year};<br>
                `
                character.appendChild(img);
                list_characters.appendChild(character); 
                            
            })    
        }
    })
}
async function getPagePlanets(number){
    axios.get(`https://swapi.dev/api/planets/?page=${number}`)
    .then((res)=>{
        list_planets.innerHTML = `<h1 class="title"> Planets </h1>`;
        for (let i = 0; i < res.data.results.length; i++) {
            const planet = document.createElement('div')
            planet.className = "planet"
            planet.innerHTML = `
                Name: ${res.data.results[i].name}; 
                Climate: ${res.data.results[i].climate};
                Diameter: ${res.data.results[i].diameter}.
                `;
                
        list_planets.appendChild(planet);
        }
        const next = document.createElement('input');
        const back = document.createElement('input');

        next.id = "next";
        next.className = "pressed-button"
        back.id = "back";
        back.className = "pressed-button"
        next.setAttribute("type", "button");
        next.setAttribute("value", "next");
        
        back.setAttribute("type", "button");
        back.setAttribute("value", "back");
        

        list_planets.appendChild(next);
        list_planets.appendChild(back);
        next.addEventListener("click", function(){
            page++;
            if(page===7)page=1
            getPagePlanets(page); 
        });
        back.addEventListener("click", function(){
            page--;
            if(page===0)page=6
            getPagePlanets(page);
        });
    }
        
)
}

