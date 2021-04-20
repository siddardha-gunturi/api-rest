const express = require('express');
const app = express();

app.get('/',(req,res) => {

    res.send("Hello siddu Chilaka");
});

app.listen(8080,() => {
    console.log("server started on port 8080");
});

app.get('/users',(req,res)=> {
    res.send("Hello I am siddu i am  banda pandhi and gay");
});

app.get('/user',(req,res)=>{
    res.send("Hello I am siddu please kindly give res to gays like me");
});