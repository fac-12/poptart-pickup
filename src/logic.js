const flavours = require('./flavour.json');

const logicFunctions = {
    filterJSON: (inputStr) => {
        const filterArr = flavours.items.filter(item => {
            return inputStr.test(item.title.toLowerCase());
        })
        return filterArr;
    },
    sortAlpha: arr => arr.sort((a, b) => a.title > b.title)
}
module.exports = logicFunctions;