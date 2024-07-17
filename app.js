import express from 'express'
import path from "path"
const app = express();
const PORT = 8000;
const __dirname = path.resolve()
import fs from 'fs'
const fileName = 'userlist.csv'
import { htmlGenerator } from './src/htmlGenerator.js';
// static files
app.use(express.static(path.join(__dirname, 'public')))
// middleware

app.use(express.json())
app.use(express.urlencoded())

//home page
app.get("/", (req,res,next)=>{
    // res.send("hello word")
    
    fs.readFile(fileName, 'utf-8',(error,data)=>{
        if(error){
            console.log(error)
        }else{
            
           
            

          res.send( htmlGenerator( data.split("\n")))
        }
    })

    // res.sendFile(
    //     path.join(__dirname,"src","index.html")
    // //   `${__dirname}/src/index.html`
    // )
    
    
})


// login
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"src","login.html"))

})
// login validation
app.post('/login',(req,res)=>{
    const {email, password} = req.body
    fs.readFile(fileName,'utf-8',(error,data)=>{
        if(error){
            console.log(error)
        }else{
            const users = data.split("\n")
            let flag =true;
            for(let user of users){
                if(user.split(',').includes(email)&&user.split(',').includes(password)){
                    res.send(`Welcome ${user}`)
                    flag=false
                }
            }
            if(flag){
                res.send("invalid login")
            }

        }
    })
    
})
//register
app.get("/register",(req,res)=>{
    res.sendFile(path.join(__dirname,"src","register.html"))
})

// after submitting with post method
app.post("/register",(req,res)=>{
 console.log('request body data',req.body)
 console.log('request query data',req.query)
 const {name, password, email}= req.body
 
 const str = `${name},${email},${password}\n`
 fs.appendFile(fileName,str,(error)=>{
    if(error){
console.log(error)
    }else{
        
        res.redirect('/')
       
    }
  
})
})
app.listen(PORT, (error)=>{
    error? console.log(error): console.log(`app is listening ${PORT}` )
})