const counterObject = require('./myscript.js')

console.log(counterObject.getCounter())
counterObject.incrementCounter()
console.log(counterObject.getCounter())

const counterObjectNew = require('./myscript.js')

console.log(counterObjectNew.getCounter())
counterObjectNew.incrementCounter()
console.log(counterObjectNew.getCounter())