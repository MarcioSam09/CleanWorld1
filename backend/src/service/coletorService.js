const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllColetor(){
    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = await connection.query("SELECT * FROM coletor");

    await connection.end();

    return rows;
}

async function createColetor(id, tipocoleta, peso){
    const connection = await mysql.createConnection(databaseConfig);

    const insertcoletor = "insert into coletor(id, tipocoleta, peso) values (?,?,?)";

    await connection.query(insertcoletor, [id, tipocoleta, peso])

    await connection.end();
}

async function updateColetor(id, tipocoleta, peso){
    const connection = await mysql.createConnection(databaseConfig);

    const updatecoletor = "UPDATE coletor SET id = ?, tipocoleta = ?, peso = ? where idcoletor = ?";

    await connection.query(updatecoletor,[id, tipocoleta, peso]);

    await connection.end();
}

async function deleteColetor (id){
    const connection = mysql.createConnection(databaseConfig);

    await connection.query("DELETE FROM coletor WHERE id = ?", [id])

    await connection.end();
}

module.exports = {
    getAllColetor,
    createColetor,
    updateColetor,
    deleteColetor,
};

