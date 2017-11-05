var http = require('http');
var fs = require('fs');
var url = require('url');


function routePath(req, res) {
    var pathObj = url.parse(req.url, true);
    console.log(pathObj);

    switch (pathObj.pathname) {
        case '/getWeather':
            var ret
            if (pathObj.query.city == 'beijing') {
                ret = {
                    city: 'beijing',
                    weather: '晴天'
                }
            } else {
                ret = {
                    city: pathObj.query.city,
                    weather: '不知道'
                }
            }
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            res.end(JSON.stringify(ret))
            break;
        default:
            res.setHeader('Content-Type', 'charset=utf-8')
            res.end(fs.readFileSync(__dirname + '/static' + pathObj.pathname))
    }

}

var server = http.createServer(function(req, res) {
    routePath(req, res)
})

server.listen(8080)
console.log('visit http://localhost:8080')