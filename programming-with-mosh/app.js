
const logger = require('./logger')
const path = require('path')
const os = require('os')
const fs = require('fs')

const EventEmitter = require('events')
const emitter = new EventEmitter()

console.log(logger)

logger.log('My message')

const pathObject = path.parse(__filename)
console.log(pathObject)

const totalMemory = os.totalmem
console.log(`The total memory is ${totalMemory}`)

const freeMemory = os.freemem
console.log(`The free memory is ${freeMemory}`)

console.log(`The uptime is ${os.uptime}`)

fs.readdir('./', function (err, files) {
    if (err) {
        console.log('Error', err)
    } else {
        console.log(files)
    }
})

emitter.on('messageLogged', function() {
    console.log('Listener called')
})

emitter.emit('messageLogged')