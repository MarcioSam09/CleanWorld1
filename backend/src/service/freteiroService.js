const mysql = require("mysql2/promise");
const databaseConfig = require("../config/database.js");

async function getAllFreteiro(){
    const connection = await mysql.createConnection(databaseConfig);

    const [rows] = await connection.query(`select
    ID_USUARIO,
    NOME,
    CPF,
    ENDERECO,
    TELEFONE,
    EMAIL,
    DISTANCIA, 
    TIPOCOLETA,
    PESO,
    NOMECARRO,
    MODELOCARRO
    from freteiro
    INNER JOIN USUARIO
    ON FRETEIRO.ID= USUARIO.ID`);

    await connection.end();

    return rows;
}

async function createFreteiro(distancia, tipoColeta, peso, nomeCarro, modeloCarro, placaCarro, id_usuario){
    const connection = await mysql.createConnection(databaseConfig);

    const insertFreteiro = "insert into freteiro(distancia, tipoColeta, peso, nomeCarro, modeloCarro, placaCarro, id_usuario) values (?,?,?,?,?,?,?)";

    await connection.query(insertFreteiro, [distancia, tipoColeta, peso, nomeCarro, modeloCarro, placaCarro, id_usuario])

    await connection.end();
}

async function updateFreteiro(id, distancia, tipoColeta, peso, nomeCarro, modeloCarro, placaCarro){
    const connection = await mysql.createConnection(databaseConfig);

    const updateFreteiro = "UPDATE Freteiro SET distancia = ?, tipoColeta = ?, peso = ?, nomeCarro = ?, modeloCarro = ?, placaCarro = ? where id = ?";

    await connection.query(updateFreteiro,[id, distancia, tipoColeta, peso, nomeCarro, modeloCarro, placaCarro]);

    await connection.end();
}

async function deleteFreteiro (id){
    const connection = await mysql.createConnection(databaseConfig);

    await connection.query("DELETE FROM freteiro WHERE id = ?", [id])

    await connection.end();
}

module.exports = {
    getAllFreteiro,
    createFreteiro,
    updateFreteiro,
    deleteFreteiro,
};

