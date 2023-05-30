const starWarApi = {}

starWarApi.getPersons = (offset = 0, limit = 5) => {    
    const url = `https://akabab.github.io/starwars-api/api/all.json?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .catch((error)=> console.error(error))

}

starWarApi.getPersona = (number) => {    
    const url = `https://akabab.github.io/starwars-api/api/${number}`
    return fetch(url)
    .then((response) => response.json())
    .catch((error)=> console.error(error))

}