const express = require('express')
const app = express()
const route=require('./routers/routes')
app.use('/', route)
app.listen(8000,() => {
    console.log("listening on")
})