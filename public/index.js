var input = document.getElementById('poptart-list');
var datalist = document.getElementById('poptart-data');

// ------- EVENT LISTENER ------- //
input.addEventListener('keyup', function(event) {
    var inputStr = event.target.value;
    if (inputStr != "") {
        request("flavours?inputStr=" + inputStr);
    } else {
        while (datalist.hasChildNodes()) {
            datalist.removeChild(datalist.lastChild);
        }
    }
});

// ------- RENDER TO DOM ------- //
function renderData(responseObj) {
    while (datalist.hasChildNodes()) {
        datalist.removeChild(datalist.lastChild);
    }
    responseObj.forEach(function(item) {
        var option = document.createElement('option');
        option.value = item.title;
        datalist.appendChild(option);
    })
}