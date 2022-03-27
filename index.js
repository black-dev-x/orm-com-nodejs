const express = require('express')
const configure = require('./api/routes/routes-config')
const app = express()
app.use(express.json())
configure(app)
const port = 3000
app.listen(port, () => console.log('server is running'))
