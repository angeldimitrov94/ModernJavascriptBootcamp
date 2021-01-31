// function getPlanets()
// {
//     return axios.get("https://swapi.dev/api/planets")
// }

// getPlanets().then((res) => 
// {
//     console.log(res.data.results)
// })

async function getPlanets()
{
    try {
        const res = await axios.get("https://swapi.dev/api/planes")
        console.log(res.data.results)
    } catch (error) {
        console.log(error)
    }
}

getPlanets()