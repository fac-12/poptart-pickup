// ------- ROUTER ------- //
// input : request, response
// Calls homeHandler or staticFileHandler or flavourHandler or default (404)
var { homeHandler, staticFileHandler, flavourHandler } = require('./handler');

function router(request, response) {
    var url = request.url;
    if (url === '/') {
        homeHandler(request, response);
        return;
    } else if (url.indexOf("public") !== -1) {
        staticFileHandler(request, response, url)
        return;
    } else if (url.indexOf("flavours") !== -1) {
        flavourHandler(request, response, url);
        return;
    } else {
        response.writeHead(404);
        response.end('404, not found');
        return;
    }
}

module.exports = router;