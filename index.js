
import express from 'express'

const app = express();

app.get("/",(req, res)=>{
    res.send("welcome......")
})

const PORT = 3000

app.listen(PORT, (req, res)=>{
    console.log(`server listing on port ${PORT}`)
})