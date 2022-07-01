'usestrict'
const fs = require('fs')
const path = require('path')

const [dir, ext] = [process.argv[2], process.argv[3]]



fs.readdir(dir, function (err, files) {
    if (err) {
        return console.log(err)
    }
    files.filter(f => path.extname(f) === `.${ext}`).forEach(x => console.log(x))
})

