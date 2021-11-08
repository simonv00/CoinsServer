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

module.exports = async function agregarMensaje(mensajeObj, AllGood, callback) {

    if (!AllGood) return callback(false) // esta opcion verifica que todas las validfaciones esten correctas
    const sqlPlaca = "INSERT INTO Mensajes (Numero_Documento,Descripcion) VALUES (?,?)";
    const {id, mensaje, tipoID} = mensajeObj;
  
    db.query(sqlPlaca, [id, mensaje],(err,result) => {
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