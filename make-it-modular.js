const filteredLs = require('./mymodule')



filteredLs(process.argv[2], process.argv[3], function (err, list) {
    if (err) {
        return console.error('oopsy daze:', err)
    }
    list.forEach(f => console.log(f))
})