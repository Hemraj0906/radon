const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
//  const mongoose=require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect("mongodb+srv://HEMRAJ0906:HEMRAJ0906@cluster0.mvhfxwr.mongodb.net/hemrajdeshmukh")
// mongoose.connect("mongodb+srv://Helloji:cQsOHRLLCFKwokjn@cluster0.5kyri.mongodb.net/kaluram2000",
// {useNewUrlParser:true,useUnifiedTopology});
// .then(( =>console.log("connection is successful......")))
// .catch((err) =>console.log(err)

app.use('/', route);


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

