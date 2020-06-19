const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// db.serialize(() => {

//     // db.run(`
//     //         CREATE TABLE IF NOT EXISTS places (
//     //             id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //             image TEXT, name TEXT, address TEXT, address2 TEXT,
//     //             state TEXT, city TEXT, items TEXT
//     //         );
//     // `)

//     // const query = `
//     // INSERT INTO places (
//     //     image,
//     //     name,
//     //     address,
//     //     address2,
//     //     state,
//     //     city,
//     //     items
//     //     ) values (?,?,?,?,?,?,?);`

//     // const values = [
//     //     "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     //     "Colectoria", "Gulherme Gemballa, Jardim América", "N° 260", "Rio do Sul", "Santa Catarina ",
//     //     "Papéis e papelão" 
//     // ]

//     // function afterInsertData(err){
//     //     if(err){
//     //         return console.log(err)
//     //     } 
//     //     console.log("Cadastrado com sucesso")
//     //     console.log(this)
//     // }
    
//     //Inserir dados
//     // db.run(query,values, afterInsertData)
        
//     //Consultar dados
//     // db.all("SELECT * FROM places", function(err, rows){
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log("Aqui estão seus registros")
//     //     console.log(rows)
//     })

    //Remover
    // db.run(`DELETE FROM places where id = ?`, [3], function(err) {
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Registro deletado")
    // })

// })

