const offset = 0;
const limit = 10;
const url = `https://akabab.github.io/starwars-api/api/all.json?offset${offset}&limit${limit}`

function convertPersonToLi(person){
    return     `
        <li class="person">
            <span class="number">#000${person.id}</span>
            <span class="name">${person.name}</span>
            <div class="detail">
                <ol class="referens">
                    <li class="referen">height: ${person.height}</li>
                    <li class="referen">mass: ${person.mass}</li>
                    <li class="referen">gender: ${person.gender}</li>
                </ol>
                <img src="${person.image}"
                     alt="${person.name}">
            </div>
        </li>
    `
}

const personList = document.getElementById("personsList")

fetch(url)
    .then((response) => response.json())    
    .then((persons) => {
    
        for (let i = 0; i < persons.length; i++) {
            const person = persons[i];
            personList.innerHTML += convertPersonToLi(person)
            
        }
    })
    
    
    .catch((error) => console.error(error))   
    
   