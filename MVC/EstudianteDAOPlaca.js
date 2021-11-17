/* import mySql from "mysql"; */

const mySql = require('mysql')

// conexion con la base de datos
const db = mySql.createPool({
  /*host: "localhost",
  user: "root",
  password: "pinguino",
  database: "Coins",*/
  database: 'sql10451850',
  user: 'sql10451850',
  host: 'sql10.freemysqlhosting.net',
  password: '9BzdD1sSkt',
});

module.exports = async function agregarPlaca(placaObj, AllGood, callback) {

    if (!AllGood) return callback(false) // esta opcion verifica que todas las validaciones esten correctas
    const sqlPlaca = "INSERT INTO Placas (Numero_Documento,Placa) VALUES (?,?)";
    const {id, placa} = placaObj;
  
    db.query(sqlPlaca, [id, placa],(err,result) => {
      //console.log(result)
      if (err) {
        //console.log(err)
        return callback(false)
      }
      else{
        return callback(true)
      }
    });
}