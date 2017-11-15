const http = require('http');
const port = 8000;
const router = require('./router');

const server = http.createServer(router);

server.listen(port, function() {
console.log('server running on' + port);
});

// module.exports = {
//   server: server,
//   handler: handler
// }
