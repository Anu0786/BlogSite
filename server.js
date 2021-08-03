const http = require('http')
const fs = require('fs')
const _ = require('lodash');

const server = http.createServer((req, res) =>{
    //console.log(req.url, req.method);
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('hello');
    });
    greet();
    greet();
    res.setHeader('Content-Type', 'text/html');

let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        case 'default':
            path += '404.html';
            break;               
    }
    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            //res.statusCode = 200;
            res.end();
        }
    })
   
});

server.listen(8080, 'localhost',() =>{
    console.log('listening port 8080');
})  