const fakeRequest = (url) => {
    return new Promise((resolve, reject) => 
    {
        setTimeout(() => 
        {
            const pages = 
            {
                "/users": [
                    {id:1, username: "Bilbo"},
                    {id:5, username: "Esmerelda"}
                ],
                "/users/1": 
                {
                    id          :1,
                    username    :"Bilbo",
                    upvotes     :360,
                    city        :"Lisbon",
                    topPostId   :454321
                },
                "/users/5":
                {
                    id          :5,
                    username    :"Esmerelda",
                    upvotes     :571,
                    city        :"Lisbon",
                },
                "/posts/454321":
                {
                    id          :454321,
                    title    :"Something something"
                },
                "/about": "This is the about page"
            }
            const data = pages[url]
            if(data) resolve({status: 200, data}) //resolve with a value since valid
            else reject({status:404}) //reject with just a code, no data since not valid
        },3000)
    })
}

fakeRequest("/users").then((res) => 
{
    const id = res.data[0].id
    console.log("DATA[0].id:",id)
    const nextRequest = `/users/${id}`
    return fakeRequest(nextRequest)
})
.then((res) => 
{
    console.log(res,":",res.data)
    const finalRequest = `/posts/${res.data.topPostId}`
    return fakeRequest(finalRequest)
})
.then((res) => 
{
        console.log(res,":",res.data)
})
.catch((err) => 
{
    console.log("OH NO ERROR:",err)
})