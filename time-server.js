const net = require('net')
const port = process.argv[2];

const date = new Date
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
const hours = date.getHours()
const minutes = date.getMinutes()

function formatter(num, fill = 2) {
    const str = num.toString()
    return str.padStart(fill, '0')
}

function listener(socket) {
    socket.end(`${year}\-${formatter(month + 1)}\-${formatter(day)} ${formatter(hours)}:${formatter(minutes)}\n`)
}

const server = net.createServer(listener)
server.listen(port)