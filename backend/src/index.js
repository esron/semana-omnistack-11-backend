const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3333

app.use(express.json())

app.use(routes)

app.listen(port,  () => console.log(`Be The HERO is listening on port ${port}!`))
