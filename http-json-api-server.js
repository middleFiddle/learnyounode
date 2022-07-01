const http = require('http')
const url = require('url')
const port = process.argv[2]

// server provides a time stamp object
// this time stamp is attached to the 'iso' provided with the GET req
// searchParams is one helpful method on the urlObj for grabbing the 'iso'

// one endpoint, needs to be parse 'time' into an object using getHours,etc.  

//the other endpoint gets unixtime from getTime()
const parseTime = (time) => {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
    }
}

const unixTime = (time) => {
    return { unixtime: time.getTime() }
}

const handler = (req, res) => {

    const urlObj = new URL(req.url, 'http://example.com')
    const time = new Date(urlObj.searchParams.get('iso'))
    let result

    /^\/api\/parsetime/.test(req.url) ?
        result = parseTime(time) :
        /^\/api\/unixtime/.test(req.url) ?
            result = unixTime(time) :
            result

    result ?
        res.writeHead(200, { 'Content-Type': 'application/json' })
            .end(JSON.stringify(result)) :
        res.writeHead(404).end()

}

const server = http.createServer(handler)
server.listen(port)