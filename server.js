const express = require('express');

const { resolve } = require('path');

const app = express();

app.use('/',
    express.static(__dirname, 'dist')
)

app.listen(process.env.PORT || 3000, (err) =>{
    if(err){
        console.log(err);
    }
    console.log('Server is running'); 
});