

console.log(process.argv.length > 3 ? process.argv.slice(2).map(e => +e).reduce((a, b) => a + b) : (process.argv.length === 3 ? +process.argv[2] : 0))