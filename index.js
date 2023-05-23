const app = require("./app");
require('dotenv').config()
const port = process.env.RUNNING_PORT;
console.log(process.env.RUNNING_PORT);



app.listen(port,  ()=>{
    console.log("server run successfully port:");
})