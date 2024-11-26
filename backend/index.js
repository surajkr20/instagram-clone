
import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();

// middlewares (this middllwares/structure follows allmost everywhere)
app.use(express.json());    //parsing data in body
app.use(cookieParser('suraj'))
app.use(urlencoded({extended: true}));

// customized cors setting
const corsOptions = {
    origin: 'http://localhost:5173/',
    Credential: true
}
app.use(cors(corsOptions))

app.use('/',(req, res)=>{
    return res.status(201).json({
        message: 'msg send successfully from the backend',
        success: true
    })
})

app.get("/",(req, res)=>{
    console.log('cookies: ', req.cookies);
    console.log('signedCookies: ', req.signedCookies)
    res.send("welcome......")
})

const PORT = 3000

app.listen(PORT, (req, res)=>{
    console.log(`server listing on port ${PORT}`)
})