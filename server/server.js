const express = require("express");

const sendButton = require("./sendButton");

const app = express();

//middleware built in per analizzare corpi delle richieste json e urlencoded
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});