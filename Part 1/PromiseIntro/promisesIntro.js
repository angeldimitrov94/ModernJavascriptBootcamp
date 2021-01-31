//Function returns a promise, which is common JS design pattern
const doTheThing = () => { 
    return new Promise((resolve, reject) => 
        setTimeout(() => {
            const rand = Math.random();
            if(rand > 0.5) 
            {
                resolve();
            }
            else
            {
                reject();
            }
        }, 5000))
    }

//Can chain the .then and .catch together as such 
doTheThing()
.then(() => 
{
    console.log("RESOLVED");
})
.catch(() => 
{
    console.log("REJECTED");
})