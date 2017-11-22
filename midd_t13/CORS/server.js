var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path')

function routePath(req, res) {
    var pathObj = url.parse(req.url, true);
    console.log(pathObj);

    switch (pathObj.pathname) {
        case '/getWeather':
            var ret
            switch (pathObj.query.city) {
                case '北京':
                    ret = {
                        city: 'beijing',
                        weather: '晴天',
                        picture: 'imgs/sunny.png'
                    }
                    break;

                case '杭州':
                    ret = {
                        city: 'hangzhou',
                        weather: '小雨',
                        picture: 'imgs/light_rain.png'
                    }
                    break;

                default:
                    ret = {
                        city: JSON.stringify(pathObj.query.city),
                        weather: '未知',
                        picture: 'imgs/shy.jpg'
                    }
                    break;
            }

            res.setHeader('Access-Control-Allow-Origin', 'http://a.com:8080')
            res.setHeader('Content-Type', 'text/plain; charset=utf-8')
            setTimeout(function() { res.end(JSON.stringify(ret)) }, 3000)

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