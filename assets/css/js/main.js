const personList = document.getElementById("personsList")
const personUnit = document.getElementById("personUnit")

const limit = 5;
let offset = 0;
loadPersonItens(offset, limit)

function loadModals(person) {   

    var ebModal = document.getElementById(`${person.id}SummaryModal`);
    var ebBtn = document.getElementById(`${person.id}Summary`);
    var ebSpan = document.getElementsByClassName(`${person.id}ebcf_close`)[0];
    
    ebBtn.onclick = function() {
        ebModal.style.display = "block";
    }
    
    ebSpan.onclick = function() {
        ebModal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == ebModal) {
            ebModal.style.display = "none";
        }
    }

}


function loadPersonItens(offset, limit){  
    starWarApi.getPersons (offset, limit).then((persons = []) => {  
        const newHtml = persons
        .map((person) =>
          `
            <li class="person">            
                <span class="name">${person.name}</span> 
                <a href="#" class="model" id="${person.id}Summary">Detail</a>              
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
                <div id="${person.id}SummaryModal" class="ebcf_modal">
                    <div class="ebcf_modal-content">
                        <span class="${person.id}ebcf_close">&times;</span>
                        <span class="name">${person.name}</span>
                        <a href="${person.wiki}" class="data">"http://starwars.wikia.com"</a>
                        <div class="personaUnit id="personaModal">                             
                            <img src="${person.image}"
                                alt="${person.id}">               
                            <div class="detail">
                                <ol class="referens">
                                    <li class="referen">height: ${person.height}</li>
                                    <li class="referen">mass: ${person.mass}</li>
                                    <li class="referen">gender: ${person.gender}</li>
                                    <li class="referen">species: ${person.species}</li>
                                </ol>
                                <ol class="referens">
                                    <li class="referen">homeworld: tatooine</li>
                                    <li class="referen">diedLocation: ${person.diedLocation}</li>
                                    <li class="referen">affiliations: ${person.affiliations[0]}</li>
                                </ol>                                
                            </div>
                        </div>     
                    </div>

				</div>
            </li>
        `)
        .join('');

        

        personList.innerHTML += newHtml   
        persons.forEach((person) => loadModals(person));
    })
}