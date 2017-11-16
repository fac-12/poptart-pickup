function request(url) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                responseObj = JSON.parse(xhr.responseText);
                renderData(responseObj);
            } else {
                //handle error here
            }
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
};
