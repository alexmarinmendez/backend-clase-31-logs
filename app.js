const express = require('express')
const log4js = require('log4js')

const app = express()
const server = app.listen(8080, () => console.log('Server Up'))

log4js.configure({
    appenders: {
        consola: { type: "console" },
        debugFile: { type: "file", filename: './debug.log'}
    },
    categories: {
        default: {
            appenders: ["consola"], level: "all"
        },
        DEV: {
            appenders: ["debugFile"], level: "DEBUG"
        }
    }
})

const logger = log4js.getLogger('DEV')

app.get('/', (req, res) => {
    logger.info('El usuario accedió a la ruta')
    logger.error('La ruta se rompió')
    res.send('Hello Qatar!!!')
})