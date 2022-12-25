const moment = require("moment")

exports.loggingResponse = async (type, appName, payload, response, statusCode, message) => {
    if (type === 'INFO') {
        console.info(`[DATE]: ${moment().format('YYYY-MM-DD HH:mm:ss')} | TYPE: ${type} | APPLICATION NAME: ${appName} | PAYLOAD: ${payload} | RESPONSE: ${response} | STATUS CODE: ${statusCode} | MESSAGE: ${message}`)
    } else if (type === 'ERROR') {
        console.error(`[DATE]: ${moment().format('YYYY-MM-DD HH:mm:ss')} | TYPE: ${type} | APPLICATION NAME: ${appName} | PAYLOAD: ${payload} | RESPONSE: ${response} | STATUS CODE: ${statusCode} | MESSAGE: ${message}`)
    } else {
        console.log(`[DATE]: ${moment().format('YYYY-MM-DD HH:mm:ss')} | TYPE: ${type} | APPLICATION NAME: ${appName} | PAYLOAD: ${payload} | RESPONSE: ${response} | STATUS CODE: ${statusCode} | MESSAGE: ${message}`)
    }
}