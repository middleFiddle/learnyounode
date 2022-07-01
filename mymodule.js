
'usestrict'
const fs = require('fs')
const path = require('path')

function filteredLs(dir, ext, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err)
        }
        list = list.filter(f => path.extname(f) === `.${ext}`)

        callback(null, list)
    })
}


module.exports = filteredLs

