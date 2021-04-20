const express = require('express');
const app = express();

app.get('/',(req,res) => {

    res.send("Hello World from root route");
});

app.listen(8080,() => {
    console.log("server started on port 8080");
});

app.get('/users',(req,res)=> {
    res.send("Hello world from users route");
});

app.get('/user',(req,res)=>{
    res.send("Hello world from user route");
});