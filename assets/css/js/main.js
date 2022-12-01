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
                    <li class="referen">species: ${person.species}</li>i
                </ol>
                <img src="${person.image}"
                     alt="${person.name}">
            </div>
        </li>
    `
}
const personList = document.getElementById("personsList")

starWarApi.getPersons ().then((persons = []) => {  
    const newHtml = persons.map(convertPersonToLi).join('') 
    personList.innerHTML = newHtml   
    })
    
    
    .catch((error) => console.error(error))   
    
   