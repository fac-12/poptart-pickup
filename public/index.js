// ------- EVENT LISTENER ------- //
// output : input.value (text from field)
var input = document.getElementById('poptart-list');
var datalist = document.getElementById('poptart-datalist');

input.addEventListener('keyup', function(event) {
    var inputStr = event.target.value;
    var code = event.keyCode;
    request("flavours?inputStr=" + inputStr + "&keycode=" + code);
});




// ------- RENDER TO DOM ------- //
// input : JSON object - should add <option> inside datalist

function renderData(response) {

console.log(response);
    // response.forEach(function (item) {
    // var option = document.createElement('option');
    // console.log(item.title);
    // option.value = item;
    // datalist.appendChild(option);
}

// ------- CALL REQUEST ------- //
// url = 'flavours'
// calls render with filtered JSON object
