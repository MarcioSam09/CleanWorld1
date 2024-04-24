const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function createTableDescartante(){
    try{
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query(`USE ${databaseConfig.database}`);

    await connection.query(`CREATE TABLE IF NOT EXISTS descartante(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        cadastroMateriais INT NOT NULL
    )`);

    await connection.end();
    console.log(`Table Descartante created !`);

} catch(error){
    console.log(`Error creating table: ${error}`);
}
};

createTableDescartante();