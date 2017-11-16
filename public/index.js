// ------- EVENT LISTENER ------- //
// output : input.value (text from field)
var input = document.getElementById('poptart-list');

input.addEventListener('keyup', function(event) {
    var inputStr = event.target.value;
    var code = event.keyCode;
    request("flavours?inputStr=" + inputStr + "keycode=" + code);
});




// ------- RENDER TO DOM ------- //
// input : JSON object - should add <option> inside datalist

function renderData(response) {
    console.log(response);
}

// ------- CALL REQUEST ------- //
// url = 'flavours'
// calls render with filtered JSON object