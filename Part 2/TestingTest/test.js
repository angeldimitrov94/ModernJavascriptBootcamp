const TestStuff = require('./function');

testStuff = require('./function');
mocha = require('mocha');
const assert = require('assert').strict;

const original = 2;
testStuff = new TestStuff(original);
const doubled = testStuff.double();

console.log(`original value : ${original} ... doubled value : ${doubled}`);

try {
  assert.strictEqual(2 * 2, doubled);
} catch (err) {
  console.log(err);
}
