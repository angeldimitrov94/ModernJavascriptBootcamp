const xmlHttp = new XMLHttpRequest();
setupPage();

function setupPage()
{
    addSearchButton();
    addURLBox();
}

function addSearchButton()
{
    var searchBtn = document.createElement("BUTTON");
    searchBtn.innerHTML = "CLICK HERE";
    searchBtn.onclick = runSearch();
    document.body.appendChild(searchBtn);
}

function addURLBox()
{
    var urlBox = document.createElement("textarea");
    urlBox.id = "URLBox";
    document.body.appendChild(urlBox);
}

function runSearch()
{
    // postData("https://sandbox.estated.com/v4/property?token=Mt2W3gIgyDM3WRSgFjm7bDdVBhjxhb&combined_address=1867+Gatewood+Dr,+Montgomery,+AL+36106", { answer: 42 })
    //   .then(data => {
    //   console.log(data); // JSON data parsed by `data.json()` call
    // });
    var url = "https://sandbox.estated.com/v4/property?token=Mt2W3gIgyDM3WRSgFjm7bDdVBhjxhb&combined_address=1867+Gatewood+Dr,+Montgomery,+AL+36106";
    httpGetAsync(url,getResults);
}

function httpGetAsync(theUrl)
{
    xmlHttp.addEventListener('load',onSuccess);
    xmlHttp.addEventListener('error',onFail);

    xmlHttp.open("GET", theUrl); // true for asynchronous 
    xmlHttp.send();
}

function onSuccess()
{
    console.log("Success!");
    console.log(xmlHttp.responseText);
}

function onFail()
{
  console.log("Fail!");
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

function getResults(results)
{
    console.log(results);
}

