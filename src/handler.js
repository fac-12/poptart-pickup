const fs = require('fs');
const path = require('path');
const logic = require('./logic.js')


const homeHandler = (request, response) => {
    fs.readFile(path.join(__dirname, '..', 'public', 'index.html'), 'utf8', (err, file) => {
        if (err) {
            response.writeHead(500, {
                'content-type': 'text/plain'
            });
            response.end('server error');
        } else {
            response.writeHead(200, {
                'content-type': 'text/html'
            });
            response.end(file);
        }
    });
}

const staticFileHandler = (request, response, url) => {
    var extensionType = {
        html: 'text/html',
        css: 'text/css',
        js: 'application/javascript',
        ico: 'image/x-icon'
    };
    var extension = url.split('.')[1];
    var filePath = path.join(__dirname, '..', url);
    fs.readFile(filePath, function(error, file) {
        if (error) {
            response.end(error);
        }
        response.writeHead(200, 'Content-Type: ' + extensionType[extension]);
        response.end(file);
    });
}

const flavourHandler = (request, response, url) => {
    const inputStr = url.split('=')[1].toLowerCase();
    const re = new RegExp('^' + inputStr);
    const arr = logic.filterJSON(re);
    const JSONobj = JSON.stringify(logic.sortAlpha(arr));
    response.writeHead(200, 'Content-Type: application/json');
    response.end(JSONobj);
}


module.exports = { homeHandler, staticFileHandler, flavourHandler }