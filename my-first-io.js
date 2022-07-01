const fs = require('fs')

// look into : cat file | wc -l
const path = process.argv[2]
const buf = fs.readFileSync(path) //returns a Buffer object
const str = buf.toString()
console.log(str.split('\n').length - 1)