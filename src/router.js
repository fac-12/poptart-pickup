// ------- ROUTER ------- //
// input : request, response
// Calls homeHandler or staticFileHandler or flavourHandler or default (404)
var {homeHandler, staticFileHandler, flavourHandler} = require('./handler');

function router(request, response) {
  var url = request.url;
  if (url.indexOf('/public') !== -1) {
    staticFileHandler(request, response, url);
    return;

  }

  switch (url) {
    case '/':
      homeHandler(request, response);
      break;


    case '/potato':
      response.writeHead(200);
      response.end('love em');
      break;

    default:
      response.writeHead(404);
      response.end('404, not found');
      return;
  }
  }
