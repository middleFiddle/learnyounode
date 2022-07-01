const http = require('http')


console.log(process.argv)

http.get(process.argv[2], function (res) {

    res.setDefaultEncoding("utf-8")
    res.on('data', function (data) {
        console.log(data)
    })
})