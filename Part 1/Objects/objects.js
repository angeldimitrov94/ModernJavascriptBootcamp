const aTestObject = {
    propertyOne : 12,
    propertyTwo : "Angel",
    propertyThree : "abcdefghijklmnopqrstuvxyz"
}

for (const property in aTestObject) {
    console.log(`${property}: ${aTestObject[property]}`);
}