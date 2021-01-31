// function reqListener () {
//     console.log(this.responseText);
//   }
  
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();

const firstReq = new XMLHttpRequest();

firstReq.addEventListener('load', onXHRSuccess);

firstReq.addEventListener('error', onXHRFail);

function onXHRSuccess()
{
    console.log("ALL GEWD");
    const data = JSON.parse(firstReq.responseText);
    console.log(data);
    for(let planet of data.results)
    {
        console.log(planet.name);
        document.body.innerText += planet.name;
        document.body.innerText += '\n';
    }
    
    const url = data.results[0].residents[0];
    getFirstResident(url);
}

function onXHRFail()
{
    console.log("ERROR");
}

const residentReq = new XMLHttpRequest();
firstReq.addEventListener('load', onResidentSuccess);
firstReq.addEventListener('error', onXHRFail);

function getFirstResident(url)
{
    console.log(url);
    residentReq.open('GET', url);
    residentReq.send();
}

function onResidentSuccess()
{
    console.log("Resident success...")
    console.log(residentReq);
    const residentData = JSON.parse(residentReq.responseText);
    console.log(residentData);
}

firstReq.open('GET','https://swapi.dev/api/planets/');
firstReq.send();
console.log('Request sent!');