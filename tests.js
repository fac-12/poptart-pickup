const test = require('tape');
const logicFunctions = require('./src/logic');
const flavours = require('./src/flavour.json');

test("Tape is working", (t) =>{
  const actual = 1;
  const expected = 1;
  t.equals(actual, expected, "one should equal one")
  t.end();
})

test("Testing filterJSON function", (t) => {
  const inputStr = /^a/;
  const obj = (logicFunctions.filterJSON(inputStr))[0];
  const actual = (obj.title).charAt(0).toLowerCase();

  const expected = 'a';
  t.equals(actual, expected, "should return an a");
  t.end();
})
