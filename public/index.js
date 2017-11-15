// ------- EVENT LISTENER ------- //
// output : input.value (text from field)
var input = document.getElementByID('poptart-list');


input.addEventListener('keypress', function(){window.alert(input.value);});




// ------- RENDER TO DOM ------- //
// input : JSON object - should add <option> inside datalist



// ------- CALL REQUEST ------- //
// url = 'flavours'
// calls render with filtered JSON object
