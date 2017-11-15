// ------- PURE AND TESTED -------



// ------- FILTER JSON ------- //
// input : JSON obj and outputs filtered object
// return object

const flavours = require('./flavour.json');

const logicFunctions = {
 cloneObject: (object) => {
  return JSON.parse(JSON.stringify(object));
},

 filterJSON: (inputStr) => {
//clone the JSON object

//based on input string, search through title key in the
//objects and output the ones that have an instance of the letter that is inputStr


}

}
module.exports = logicFunctions;
