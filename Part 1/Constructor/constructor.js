// function makeColor(r,g,b)
// {
//     const color = {}
//     color.r = r
//     color.g = g
//     color.b = b
//     color.rgb = function()
//     {
//         const {r, g, b} = this
//         return `rgb(${r}, ${g}, ${b})`
//     }
//     color.hex = function()
//     {
//         const {r, g, b} = this
//         return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     }
//     return color
// }

function Color(r,g,b)
{
    this.r = r
    this.g = g
    this.b = b
    console.log(`New Color created : ${r},${g},${b}`)
}

Color.prototype.rgb = function() 
{
    const {r,g,b} = this
    return `rgb(${r}, ${g}, ${b})`
}

Color.prototype.hex = function() 
{
    const {r,g,b} = this
    return `#` + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}