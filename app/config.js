require('dotenv').config({ path: `${process.env.NODE_ENV}.env` })
const logger = require('./logger')

console.log(`configuration file get loaded: ${process.env.NODE_ENV}.env`)
logger.loggingResponse('INFO', 'LOADING CONFIGURATIONS', null, null, '200', `configuration file get loaded: ${process.env.NODE_ENV}.env`)
module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    SERVER_HOST: process.env.SERVER_HOST,
    PORT: process.env.PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME
}