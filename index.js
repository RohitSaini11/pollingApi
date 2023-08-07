const express = require('express');
const PORT = 8080;
const path = require('path');

const app = express();
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use('/',require('./routes'));


app.listen(PORT,function(err){
    if(err){
        console.log(`Error starting the server: ${err}`);
    }
    console.log(`Server up and running at port: ${PORT}`);
});