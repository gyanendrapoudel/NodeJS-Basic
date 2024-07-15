import express from 'express'
import path from "path"
const app = express();
const PORT = 8000;
const __dirname = path.resolve()

// static files
app.use(express.static(path.join(__dirname, 'public')))
app.get("/hello", (req,res,next)=>{
    // res.send("hello word")
    res.sendFile(
        path.join(__dirname,"src","index.html")
    //   `${__dirname}/src/index.html`
    )
    console.log(next)
})

app.listen(PORT, (error)=>{
    error? console.log(error): console.log(`app is listening ${PORT}` )
})