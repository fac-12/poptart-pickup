const http = require('http');
const port = 8000;
const router = require('./router');

const server = http.createServer(router);

server.listen(port, () => console.log('server running on port: ' + port));