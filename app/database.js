const config = require('./config')
module.exports = {
    "development": {
        "username": config.DB_USERNAME,
        "password": config.DB_PASSWORD,
        "database": config.DB_NAME,
        "host": config.DB_HOST,
        "port": config.DB_PORT,
        "timezone": "Africa/Nairobi",
        "dialect": "mysql"
    },
    "test": {
        "username": config.DB_USERNAME,
        "password": config.DB_PASSWORD,
        "database": config.DB_NAME,
        "host": config.DB_HOST,
        "port": config.DB_PORT,
        "timezone": "Africa/Nairobi",
        "dialect": "mysql"
    },
    "stage": {
        "username": config.DB_USERNAME,
        "password": config.DB_PASSWORD,
        "database": config.DB_NAME,
        "host": config.DB_HOST,
        "port": config.DB_PORT,
        "timezone": "Africa/Nairobi",
        "dialect": "mysql"
    },
    "production": {
        "username": config.DB_USERNAME,
        "password": config.DB_PASSWORD,
        "database": config.DB_NAME,
        "host": config.DB_HOST,
        "port": config.DB_PORT,
        "timezone": "Africa/Nairobi",
        "dialect": "mysql"
    }
}