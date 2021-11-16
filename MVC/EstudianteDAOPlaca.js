/* import mySql from "mysql"; */

const mySql = require('mysql')

// conexion con la base de datos
const db = mySql.createPool({
  /*host: "localhost",
  user: "root",
  password: "pinguino",
  database: "Coins",*/
  database: 'sql10448835',
  user: 'sql10448835',
  host: 'sql10.freemysqlhosting.net',
  password: 'ssU2dhtbJz',
});

module.exports = async function agregarPlaca(placaObj, AllGood, callback) {

    if (!AllGood) return callback(false) // esta opcion verifica que todas las validfaciones esten correctas
    const sqlPlaca = "INSERT INTO Placas (Numero_Documento,Placa) VALUES (?,?)";
    const {id, placa} = placaObj;
  
    db.query(sqlPlaca, [id, placa],(err,result) => {
      //console.log(result)
      if (err) {
        //console.log(err)
        return callback({itSaved:false,error:err})
      }
      else{
        return callback(true)
      }
    });
}