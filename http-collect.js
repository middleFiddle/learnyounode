const http = require('http')
const bl = require('bl') //
http.get(process.argv[2], function (res) {
    res.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
    }))
})


/* var str = ''
http.get(process.argv[2], function (res) {
    res.setEncoding('utf8')
    const end = res.writableFinished
    do {

        res.on('data', function (data) {
            str += data
        })
    }
    while (!end)
    end && console.log(str)
}) */