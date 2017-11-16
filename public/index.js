// ------- EVENT LISTENER ------- //
// output : input.value (text from field)
var input = document.getElementById('poptart-list');
var datalist = document.getElementById('poptart-data');

input.addEventListener('keyup', function(event) {
  var inputStr = event.target.value;
  var code = event.keyCode;
  request("flavours?inputStr=" + inputStr + "&keycode=" + code);

});

// ------- RENDER TO DOM ------- //
// input : JSON object - should add <option> inside datalist

function renderData(responseObj) {
  (responseObj.items).forEach((item) => {
    console.log(item.title);
    var option = document.createElement('option');
    option.value = item.title;
    datalist.appendChild(option);
  })
  console.log("render");
}
renderData(responseObj)
