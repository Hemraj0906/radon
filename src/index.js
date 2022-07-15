const express = require("express")
const bodyParser = express.json()
// const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const app = express()
const multer= require("multer");   //awsline
const  aws  = require('aws-sdk');  //awsline
const route = require("./routes/route")

app.use(bodyParser)
app.use(multer().any())  //awsline

mongoose.connect("mongodb+srv://Jagcho:71nEXJtXcYfVx8T6@cluster0.5bg4mzz.mongodb.net/group25Databasee"
    , { useNewUrlParser: true })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use("/", route)




app.listen(process.env.PORT || 3000, function () { console.log("Express is running on port " + (process.env.PORT || 3000)) });

