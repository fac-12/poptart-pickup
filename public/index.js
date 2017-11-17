var input = document.getElementById('poptart-list');
var datalist = document.getElementById('poptart-data');
var form = document.getElementById('form');
var gif = document.getElementById('gif');
var returnedFlavour = document.getElementById('returnedFlavour');

// ------- EVENT LISTENER ------- //
input.addEventListener('keyup', function(event) {
    var inputStr = event.target.value;
    if (inputStr != "") {
        request("flavours?inputStr=" + inputStr, renderData);
    } else {
        while (datalist.hasChildNodes()) {
            datalist.removeChild(datalist.lastChild);
        }
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var inputStr = input.value;
    request("flavours?inputStr=" + inputStr, animate)
})

var animate = function(responseObj) {
    var inputStr = input.value;
    input.value = "";
    var arr = responseObj.filter(function(item) {
        return item.title === inputStr;
    })
    console.log(arr)
    if (arr.length > 0) {
        var banner = document.createElement('div');
        var text = document.createElement('p');
        banner.className = "banner"
        text.className = "text"
        text.innerText = inputStr;
        returnedFlavour.appendChild(banner)
        banner.appendChild(text)
        returnedFlavour.className = "returnedFlavour";
        gif.className += " animation";
        setTimeout(function() {
            returnedFlavour.className = "hidden";
            gif.className = "gif";
            while (returnedFlavour.hasChildNodes()) {
                returnedFlavour.removeChild(returnedFlavour.lastChild);
            }
        }, 6000)
    } else {
        alert("Please enter a valid flavour")
    }

}

var renderData = function(responseObj) {
    while (datalist.hasChildNodes()) {
        datalist.removeChild(datalist.lastChild);
    }
    responseObj.forEach(function(item) {
        var option = document.createElement('option');
        option.value = item.title;
        datalist.appendChild(option);
    })
}

function request(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                responseObj = JSON.parse(xhr.responseText);
                cb(responseObj)
            } else {
                alert("Ooops something went wrong!")
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
};