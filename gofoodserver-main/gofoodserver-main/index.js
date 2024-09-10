const express = require('express')
const app = express()
const port = 4000
const mongoDB=require('./db')
const router=require('./Routes/CreatUser')
const router1=require('./Routes/DisplayData')
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  )
  next();
})

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',router)
app.use('/api',router1)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})