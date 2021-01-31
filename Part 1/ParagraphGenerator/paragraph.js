let name = document.getElementById("nameField").value;
let gender = document.getElementById("genderField").value;
let genderPronoun = null;
let hometown = document.getElementById("hometownField").value;
let occupation = document.getElementById("occupationField").value;
let paragraph = "";

function generateParagraph()
{
    if(name!="" && genderPronoun!="" && gender!=null && hometown!="" && occupation!="")
    {
        paragraph = `This is a paragraph about ${name}. ${genderPronoun} is a great person, who lives in ${hometown}. ${genderPronoun} works as ${occupation}.`;
        document.getElementById("paragraph").innerHTML = paragraph;
    }
}