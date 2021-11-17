const express = require("express");
const path = require("path");
const app = express();

const http_port = process.env.PORT || 8080;

app.get("/",(req,res)=>{

    let userData={
        userName: "sarthak vashistha"
    };
    // res.sendFile(path.join(__dirname,"/views/home.html"));
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template engine (Handlebars) demo</title>
</head>
<body>
    <h1>Template engine (Handlebars) Demo</h1>
    <p>Hello ${userData.userName}</p>
</body>
</html>
    `);
});

app.listen(http_port, () =>{
    console.log("sever listening on: "+http_port);
})