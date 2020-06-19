const express = require("express");
const server = express();

//BD
const db = require("./database/db")

//template engine
const nunjunks = require("nunjucks");
nunjunks.configure("src/views", {
    express: server,
    noCache: true
})


//Configurando pasta publica
server.use(express.static("public"));

//Habilitar o uso do req.body para a obtenção de dados do formulário
server.use(express.urlencoded({ extended: true }))


server.get("/", (req, res) => {
   return res.render("index.html", { title: "Titulo" });
});


//Ir para a página de criação de pontos de coleta
server.get("/create-point", (req, res) => {

   return res.render("create-point.html");
});

//Cadastrar um ponto de coleta
server.post("/savepoint", (req, res) => {

    console.log(req.body)

    const query = `
     INSERT INTO places (
         image,
         name,
         address,
         address2,
         state,
         city,
         items
         ) values (?,?,?,?,?,?,?);`

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items  
    ]

    function afterInsertData(err){
        if(err){
             console.log(err)
             res.send("Erro no cadastro")
        } 
        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("create-point.html", { saved: true }) 
    }
    
    // Inserir dados
    db.run(query,values, afterInsertData)

    
})

server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == ""){
        return res.render("search-results.html", { quantidade : 0 });

    }


    db.all(`SELECT * FROM places where city LIKE '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        }

        const total = rows.length
        //mostrar a página com os dados do banco
        return res.render("search-results.html", { places: rows, quantidade : total });
    })

    
 });

server.listen(3000);