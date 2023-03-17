const express = require("express");
const route = require("./routes");
const app = express();

app.use("/", route)
app.listen(3333, () => {
    console.log("Servidor Online!");
});