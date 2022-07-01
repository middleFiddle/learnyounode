const http = require('http')
const fs = require('fs')
const port = process.argv[2];

const stream = fs.createReadStream(process.argv[3])
learn
const reqRes = (req, res) => {
    stream.pipe(res)
}



const server = http.createServer(reqRes)



server.listen(port)