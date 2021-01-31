axios
    .get('https://swapi.dev/api/planets/')
    .then((res) => 
    {
        console.log("Top-level data:",res.data);
        return res.data.results[0].films[0]
    })
    .then((res) => 
    {
        console.log("First planet's first film :",res)
        axios.get(res)
        .then((res) => 
        {
            console.log("First planet's first film's data :",res.data)
        })
    })
    //Axios, unlike fetch, handles the 404 or 500 errors automatically
    .catch((err) => 
    {
        console.log('IN CATCH!');
        console.log(err);
    })