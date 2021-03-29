const list = document.querySelector('ul');
const info = document.querySelector('#get_info');
const body = document.querySelector("body");
info.addEventListener("click", getInfo)
function getInfo(){
    let a = document.querySelector('#number_episode').value;
   
    axios.get(`https://swapi.dev/api/films/${a}`)
    .then((res)=>{
        let people = {};
        for (let i = 0; i < res.data.characters.length; i++) {
            
            axios.get(res.data.characters[i]).then((res)=>{
                people[i] = [res.data.name, res.data.birth_year, res.data.gender];
                
                const li = document.createElement('li');
                li.innerHTML = people[i];
                list.appendChild(li);
                // const newDiv = document.createElement("div")
               // document.body.insertAdjacentHTML('afterbegin', people[i]);
               
            })    
        }
    })
    const planetsUl = document.createElement('ul');
    body.append(planetsUl);
    for (let i = 1; i <= 60; i++) {
        axios.get(`https://swapi.dev/api/planets/${i}`)
    .then((res)=>{
       
        const planets = document.createElement('li')
        planets.innerHTML = `${i} :
        Name: ${res.data.name}
        Climate: ${res.data.climate}
        Diameter: ${res.data.diameter}
        `;
        
        planetsUl.appendChild(planets);

        console.log(res.data)
    }
        
    )}
}
