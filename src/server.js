const express = require("express");
const server = express();

//template engine
const nunjunks = require("nunjucks");
nunjunks.configure("src/views", {
    express: server,
    noCache: true
})


//Configurando pasta publica
server.use(express.static("public"));


server.get("/", (req, res) => {
   return res.render("index.html", { title: "Titulo" });
});

server.get("/create-point", (req, res) => {
   return res.render("create-point.html");
});

server.get("/search", (req, res) => {
    return res.render("search-results.html");
 });

server.listen(3000);