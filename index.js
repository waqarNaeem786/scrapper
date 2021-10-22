const express = require('express')
const {first, desc} = require('./routes/first')
const cors = require('cors')
// express
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//Routes
app.use('/front', first)
app.use('/description', desc)


app.listen(5000, ()=>{
    console.log("up and running...")
})