const http = require('http');

const server = http.createServer((req, res) => {
    console.log("running request ...")
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>hello</h3>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log("server is running on port 3000");
})