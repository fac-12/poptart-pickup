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
  const obj = logicFunctions.filterJSON(inputStr);
  const actual = (obj.items).forEach((item) => {
    return items.title;
  })

  const expected = 'a';
  t.equals(actual, expected, "should return an a");
  t.end();
})

// test("Testing filterJSON function", (t) => {
//   const actual = logicFunctions.filterJSON('a');
//   const expected = {
//       "id": 3795,
//       "title": "Apple",
//       "url": "http://poptarts.wikia.com/wiki/Flavors",
//       "ns": 0,
//       "quality": 0
//     }
//   t.equals()
//   t.end();
// })


var testObj = {
    "items": [{
        "id": 3795,
        "title": "Apple",
        "url": "http://poptarts.wikia.com/wiki/Flavors",
        "ns": 0,
        "quality": 0
      },
      {
        "id": 2093,
        "title": "Banana",
        "url": "http://poptarts.wikia.com/wiki/Category:Unfrosted_Flavors",
        "ns": 14,
        "quality": null
      },
      {
        "id": 2062,
        "title": "Carrot",
        "url": "http://poptarts.wikia.com/wiki/Category:Discontinued_Flavors",
        "ns": 14,
        "quality": 0
      }
]}
