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
   const newObj = logicFunctions.cloneObject(flavours)
   const filterArr = newObj.items.filter(item => {
     return item.title.charAt(0).toLowerCase() === inputStr.charAt(0).toLowerCase();
   })
 console.log(filterArr);
//based on input string, search through title key in the
//objects and output the ones that have an instance of the letter that is inputStr
}

}
  logicFunctions.filterJSON("a");

module.exports = logicFunctions;
