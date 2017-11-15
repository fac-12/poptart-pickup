// ------- PURE AND TESTED -------



// ------- FILTER JSON ------- //
// input : JSON obj and outputs filtered object
// return object

const flavours = require('./flavour.json');

//Clone the JSON object
const logicFunctions = {
 cloneObject: (object) => {
  return JSON.parse(JSON.stringify(object));
},

//Filter the JSON object and output the ones that have the first letter
 filterJSON: (inputStr) => {
   const newObj = logicFunctions.cloneObject(flavours)
   const filterArr = newObj.items.filter(item => {
     return item.title.charAt(0).toLowerCase() === inputStr.charAt(0).toLowerCase();
   })
 console.log(filterArr);

}

}
  logicFunctions.filterJSON("a");

module.exports = logicFunctions;
