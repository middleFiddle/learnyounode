'use strict'
const fs = require('fs')

// look into : cat file | wc -l
const path = process.argv[2]
fs.readFile(path, function (err, data) {
    if (err) {
        return console.log(err)
    }
    const lines = data.toString().split('\n').length - 1
    console.log(lines)

}) //