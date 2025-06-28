const express = require("express");
const app = express();
require("dotenv").config()

app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})

app.get('/api/get_user_details',(req,res) => {
    res.send({
        user:{
            name:"satyam",
            age:22,
            contact:12254
        },env:process.env.NAME
    })
});


app.listen(8000, '0.0.0.0', () => {
  console.log('listening to 8000');
});