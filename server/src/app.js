const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

/**
 *
 * METHODS 
get,
post,
put,
patch,
delete,
 */

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello Node js'
    })
})

app.listen(process.env.PORT || 8081)