const starWarApi = {}

starWarApi.getPersons = (offset = 0, limit = 10) => {    
    const url = `https://akabab.github.io/starwars-api/api/all.json?offset=${offset}&limit=${limit}`
    return fetch(url)
    .then((response) => response.json())
    .catch((error)=> console.error(error))

}