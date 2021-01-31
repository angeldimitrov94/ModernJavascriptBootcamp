fetch('https://swapi.dev/api/planets/')
    .then(response => checkStatusAndParse(response))
    .then(data => printThisAndGetNext(data))
    .then(response => checkStatusAndParse(response))
    .then(data => printThis(data))
    .catch(err => printError(err))
    .finally(printEnd())

function checkStatusAndParse(response)
{
    if(!response.ok) throw new Error(`Status Code Error : ${response.status}`);

    return response.json();
}

function printError(error)
{
    console.log("Error occurred");
    console.log(error);
}

function printThisAndGetNext(data)
{
    for(let planet of data.results)
    {
        console.log(planet.name);
    }

    const nextURL = data.next;
    return fetch(nextURL);
}

function printThis(data)
{
    for(let planet of data.results)
    {
        console.log(planet.name);
    }

    return Promise.resolve(data);
}

function printEnd()
{
    console.log("COMPLETE");
}