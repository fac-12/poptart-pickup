var { homeHandler, staticFileHandler, flavourHandler, submitHandler } = require('./handler');

function router(request, response) {
    var url = request.url;
    if (url === '/') {
        homeHandler(request, response);
    } else if (url.indexOf("public") !== -1) {
        staticFileHandler(request, response, url)
    } else if (url.indexOf("flavours") !== -1) {
        flavourHandler(request, response, url);
    } else {
        response.writeHead(404);
        response.end('404, not found');
    }
}

module.exports = router;