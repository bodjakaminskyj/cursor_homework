const list = document.querySelector('.list');
const info = document.querySelector('#get_info');
const planets = document.querySelector('#get_planet');
let page = 1;
info.addEventListener("click", getInfo);
planets.addEventListener("click", getPlanets);
function getPlanets(){
    getPagePlanets(page)
    

}

function getInfo(){
    let n = document.querySelector('#number_episode').value;
    axios.get(`httpss://swapi.dev/api/films/${n}`)
    .then((result)=>{  
        const actors = result.data.characters;
        console.log(actors);      
        list.innerHTML = `<h1 class="title"> Characters </h1>`;
        for (let i = 0; i < actors.length; i++) {
            axios.get(`https${actors[i].substring(4)}`).then((res)=>{
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
                list.appendChild(character); 
                            
            })    
        }
    })
}
function getPagePlanets(number){
    axios.get(`https://swapi.dev/api/planets/?page=${number}`)
    .then((res)=>{
        list.innerHTML = `<h1 class="title"> Planets </h1>`;
        for (let i = 0; i < res.data.results.length; i++) {
            const planet = document.createElement('div')
            planet.className = "planet"
            planet.innerHTML = `
                Name: ${res.data.results[i].name}; 
                Climate: ${res.data.results[i].climate};
                Diameter: ${res.data.results[i].diameter}.
                `;
                
        list.appendChild(planet);
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
        
        list.appendChild(back);
        list.appendChild(next);
        
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

