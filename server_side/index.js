const express = require("express");

const app = express();

app.get("/", (req, res) => {
    app.send("api is running");
})
app.listen(5000, console.log("running at 5000..."))