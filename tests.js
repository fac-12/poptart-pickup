const test = require('tape');
const logicFunctions = require('./src/logic');
const flavours = require('./src/flavour.json');

test("Tape is working", (t) =>{
  const actual = 1;
  const expected = 1;
  t.equals(actual, expected, "one should equal one")
  t.end();
})

test("Testing clone JSON object", (t) => {
  t.equals(typeof logicFunctions.cloneObject(flavours), "object", "should return an object");
  t.end();
})

test("Testing filterJSON function", (t) => {
  t.equals()
  t.end();
})
