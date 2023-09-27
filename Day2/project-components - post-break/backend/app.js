const express = require('express');
const app = express()
// import data from "./dummy.json";

// const data = 9;
// "Welcome to NEWS section",
app.get('/', (req,res) => res.send("hello World!"));
app.post('/news', (req,res) => res.send("Welcome to NEWS section"));

app.listen(5000, () => console.log("Server started at 5000"));
