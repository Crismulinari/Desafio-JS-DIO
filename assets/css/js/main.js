const personList = document.getElementById("personsList")
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5;
let offset = 0;

function loadPersonItens(offset, limit){
    starWarApi.getPersons (offset, limit).then((persons = []) => {  
        const newHtml = persons.map((person) =>  `
            <li class="person">            
                <span class="name">${person.name}</span>
                <span class="number">homeworld: ${person.homeworld}</span>
                <div class="detail">
                    <ol class="referens">
                        <li class="referen">height: ${person.height}</li>
                        <li class="referen">mass: ${person.mass}</li>
                        <li class="referen">gender: ${person.gender}</li>
                        <li class="referen">species: ${person.species}</li>
                    </ol>
                    <img src="${person.image}"
                        alt="${person.name}">
                </div>
            </li>
        `).join('') 
        personList.innerHTML += newHtml   
    })
}

loadPersonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPersonItens(offset, limit)
})
    
    
    
    
   