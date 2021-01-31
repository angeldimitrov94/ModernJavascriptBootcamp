async function getThreePokes()
{
    //this demonstrates performing requests in parallel, which is more efficient

    //create the requests
    const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3")

    //await the response and save into the var
    const poke1 = await prom1
    const poke2 = await prom2
    const poke3 = await prom3

    //display the data
    console.log("<<<USING manual method>>>")
    console.log("pokemon 1 :",poke1.data.name)
    console.log("pokemon 2 :",poke2.data.name)
    console.log("pokemon 3 :",poke3.data.name)
    console.log("<<<USING manual method>>>")
}

getThreePokes()

async function getThreePokesAll()
{
    //this demonstrates performing requests in parallel, which is more efficient

    //create the requests
    const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3")

    //await the response and save into the var
    const allPokes = await Promise.all([prom1, prom2, prom3])

    //display the data
    console.log("<<<USING Promise.all()>>>")
    allPokes.forEach(element => {
        console.log("Name : ",element.data.name)
    });
    console.log("<<<USING Promise.all()>>>")
}

getThreePokesAll()