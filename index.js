 const express = require('express');
const app = express();
app.get("/",(req,resp)=>{
    resp.send("app is not at place...")
});

app.listen(7600); 


