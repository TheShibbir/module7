const express = require("express");
const app = new express();
const router = require("./src/routes/api");
 
//security middleware
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize =require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const hpp = require("hpp");
//middleware implementation
app.use(cors())
app.use(hpp())
app.use(xss())
app.use(helmet())
app.use(mongoSanitize())

const limiter = rateLimit({
    windowMs : 2* 60* 1000
   , max : 50
})

app.use("/api/v1", router)

//undefine route
app.use("*", (req,res)=>{
    res.status(404).json({status:'failed', data:"this route is not available"})
})
module.exports=app;