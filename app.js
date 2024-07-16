import express from 'express'
import path from "path"
const app = express();
const PORT = 8000;
const __dirname = path.resolve()

// static files
app.use(express.static(path.join(__dirname, 'public')))
// middleware
app.use(express.json())
app.use(express.urlencoded())
//home page
app.get("/", (req,res,next)=>{
    // res.send("hello word")
    res.sendFile(
        path.join(__dirname,"src","index.html")
    //   `${__dirname}/src/index.html`
    )
    console.log(next)
})

// login
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"src","login.html"))
})
//register
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"src","register.html"))
})
// after submitting with post method
app.post("/register",(req,res)=>{
 console.log('request body data',req.body)
 console.log('request query data',req.query)
 res.send("data submitted")
})
app.listen(PORT, (error)=>{
    error? console.log(error): console.log(`app is listening ${PORT}` )
})