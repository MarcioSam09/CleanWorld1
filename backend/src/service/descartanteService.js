const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllDescartantes(){

    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = connection.query("SELECT * FROM descartante");

    await connection.end();

    return rows;
};

async function createDescartante(id, tipocoleta, peso){
    const connection = await mysql.createConnection(databaseConfig);

    const insertDescartante = "insert into descartante(id, tipocoleta, peso) values (?,?,?)";

    await connection.query(insertDescartante, [id, tipocoleta, peso])

    await connection.end();
}


async function updateDescartante(id, cadastroMateriais){
    const connection = await mysql.createConnection(databaseConfig);
    const update = (`UPDATE `);

    await connection.query(update[id, cadastroMateriais, id_usuario]);

    await connection.end();
};

async function deleteDescartante(id) {
    const connection = await mysql.createConnection(databaseConfig);
  
    await connection.query("DELETE FROM descartante WHERE id = ?"[id]);
  
    await connection.end();
  }

module.exports = { 
getAllDescartantes,
updateDescartante,
deleteDescartante,

};
