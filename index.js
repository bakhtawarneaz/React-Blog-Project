const express = require("express");
const connect = require("./config/db")
const app = express();
require('dotenv').config();
connect();
app.get('/',(req,res) =>{
    res.send('test')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log('Your app is running')
});
