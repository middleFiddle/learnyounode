const http = require('http')
const bl = require('bl') //
const [first, second, ...rest] = process.argv
const results = []
let count = 0

function print(arr) {
    arr.forEach(l => console.log(l))
}

rest.forEach((arg, i) => {


    http.get(arg, function (res) {
        res.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
            results[i] = data.toString()
            count++
            if (count === 3) {
                print(results)
            }
        }))
    })

})

