const express = require('express');
const connectDb = require('./config/db');
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoutes");

const mongoose = require("mongoose");
const app = express()

require("dotenv").config();
connectDb();

let port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/user",userRoutes);

app.get('/',(req,res)=>{
    res.send("hello world");
});

// mongoose
//         .connect("mongodb://127.0.0.1:27017/E-commerce")
//         .then(()=>{
//             console.log("Conneted successfully ");
//         })
        

app.listen(port,()=>{
    console.log(`please check port on ${port}`);
}) 