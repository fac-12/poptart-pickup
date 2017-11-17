var input = document.getElementById('poptart-list');
var datalist = document.getElementById('poptart-data');
var form = document.getElementById('form');
var gif = document.getElementById('gif');
var returnedFlavour = document.getElementById('returnedFlavour');

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

form.addEventListener('submit', function(event) {
        event.preventDefault();
        var inputStr = input.value;
        returnedFlavour.innerText = inputStr;
        returnedFlavour.className = "returnedFlavour";
        gif.className += " animation";
        setTimeout(function() {
            returnedFlavour.className = "hidden";
            gif.className = "gif";
        }, 6000)
    })
    
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
