require('dotenv').config()
const express = require('express')
const app = express()
// const port = 5000

app.get('/', (req, res) => {
  res.send('Hello rohama this is home page')
})

app.get("/login",(req,res) =>{
res.send("hello rohama login!")
})

app.get("/signup",(req,res) =>{
    res.send("hello rohama signup!")
})

app.get("/youtube",(req,res) =>{
res.send("<h1>rohama majeed</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})