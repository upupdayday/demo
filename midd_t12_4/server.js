var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

function routePath(req, res) {
    var pathObj = url.parse(req.url, true);
    console.log(pathObj);

    switch (pathObj.pathname) {
        case '/getWeather':
            var ret = {
                index: JSON.stringify(pathObj.query.index),
                text: pathObj.query.index,
            }

            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
                // setTimeout(function() { res.end(JSON.stringify(ret)) }, 3000)

            break;
        default:
            console.log(pathObj.pathname)
            staticRoot(path.resolve(__dirname, 'static'), req, res);
    }
}


function staticRoot(staticPath, req, res) {
    var pathObj = url.parse(req.url, true)
    if (pathObj.pathname === '/') {
        pathObj.pathname += 'index.html'
    }
    var filePath = path.join(staticPath, pathObj.pathname)
    fs.readFile(filePath, 'binary', function(err, content) {
        if (err) {
            res.writeHead('404', 'haha Not Found')
            return res.end()
        }

        res.writeHead(200, 'Ok')
        res.write(content, 'binary')
        res.end()
    })

}

var server = http.createServer(function(req, res) {
    routePath(req, res)
})

server.listen(8080)
console.log('visit http://localhost:8080')