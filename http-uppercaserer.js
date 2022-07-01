const http = require('http')
const port = process.argv[2]
const map = require('through2-map')



const reqRes = (req, res) => {
    req.pipe(map(chunk => chunk
        .toString()
        .toUpperCase()))
        .pipe(res)
}

const server = http.createServer(reqRes)


server.listen(port)