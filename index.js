const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config()
const bookRouter = require("./route/book.route")
const mongoose = require("mongoose");

const port = process.env.PORT;
const DB_URL = process.env.DB_URL;


app.get("/",(req,res)=>{
    res.end("The server is working !");
})

//Database Connection 


async function DBConnection() {
    try {
        await mongoose.connect(DB_URL)
        console.log("Database is connected !");
    } catch (error) {
        
        console.log("Database Error : " + error);
    }
}

DBConnection();




//DEfining routs 

app.use("/book/api",bookRouter)

app.listen(port,()=>{
    console.log("Server is running at : http://localhost:"+port);
})