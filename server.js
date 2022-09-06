const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // set header content type
    res.setHeader('Content-Type', 'text/html');

    // figure out the requested path
    let path = './views/';
    switch(req.url){
        case '/':
            res.statusCode = 200;
            path += 'index.html';
            break;
        case '/about':
            res.statusCode = 200;
            path += 'about.html';
            break;
        default:
            res.statusCode = 404;
            path += '404.html';
            break;
    }

    // send an HTML file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});