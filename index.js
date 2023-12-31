const express = require("express");
const bodyParser = require('body-parser')
const connect = require("./config/db")
const router = require("./routes/userRoutes");
require('dotenv').config();
const app = express();

/* Connect MonogoDB */
connect();

/* Middleware */
app.use(bodyParser.json())

/* Routes */
app.use("/",router);

/* Port */
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Your app is running')
});
