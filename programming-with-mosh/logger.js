
const LOGGER_URL = 'http://mylogger.is/log'

function log(message) {
    // Send an HTTP request
    myHelperLogFunction(message)
}

// this funcion is not visible outside of this module (file)
function myHelperLogFunction(message) {
    console.log(message)
}

module.exports.log = log
module.exports.endPoint = LOGGER_URL
