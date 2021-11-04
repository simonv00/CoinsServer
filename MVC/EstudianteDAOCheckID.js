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


module.exports = async function checkStudentID(montoObj,AllGood, callback) {

    if (!AllGood) return callback(false) // esta opcion verifica que todas las validfaciones esten correctas
    const sqlExists = "SELECT * from estudiantes WHERE Numero_Documento= (?)";
    const {id, monto, tipoID} = montoObj;
    console.log("ID: ", id)
    db.query(sqlExists, [id], (err, result) => {
      if (result.length == 0) {
        // El dato no esta en la base de datos
        return callback(false);
      } else {
        //hay un error, probablemente un dato duplicado
        return callback(true);
      }
    });
  }