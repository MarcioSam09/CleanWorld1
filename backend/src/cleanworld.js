const express = require("express");
const bodyParser = require("body-parser");
const freteiroRouter = require("./router/freteiroRouter");
const usuarioRouter = require("./router/usuarioRouter");

const port = 3000;
const cleanworld = express();

cleanworld.use(bodyParser.json("application/json")) 

cleanworld.get("/", (req, res) => {
    res.send("<h1> CleanWorld <h1>");
})

cleanworld.use("/api", freteiroRouter);

cleanworld.use("/api", usuarioRouter);

cleanworld.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}`);
});
