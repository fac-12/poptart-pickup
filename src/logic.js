// ------- PURE AND TESTED -------



// ------- FILTER JSON ------- //
// input : JSON obj and outputs filtered object
// return object

const flavours = require('./flavour.json');

//Clone the JSON object
const logicFunctions = {
    //Filter the JSON object and output the ones that have the first letter
    filterJSON: (inputStr) => {
        const filterArr = flavours.items.filter(item => {
                return inputStr.test(item.title.toLowerCase());
            })
            //console.log("working", filterArr)
        const jsonObj = JSON.stringify(filterArr);
        return jsonObj;

    }



}


module.exports = logicFunctions;