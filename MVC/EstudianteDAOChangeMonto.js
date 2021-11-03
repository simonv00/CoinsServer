/* import mySql from "mysql"; */

const mySql = require('mysql')

// conexion con la base de datos
const db = mySql.createPool({
  /*host: "localhost",
  user: "root",
  password: "pinguino",
  database: "Coins",*/
  database: 'sql10448835',
  username: 'sql10448835',
  host: 'sql10.freemysqlhosting.net',
  password: 'ssU2dhtbJz',
});

module.exports = async function changeMonto(montoObj, AllGood, callback) {

    if (!AllGood) return callback(false) // esta opcion verifica que todas las validfaciones esten correctas
    const sqlSaldo = "UPDATE estudiantes SET Saldo =  Saldo + (?) WHERE Numero_Documento = (?)";
    //const sqlSum = "UPDATE estudiantes SET Saldo =  (?) + (?) WHERE Numero_Documento = (?)";
    const {id, monto, tipoID} = montoObj;
  
    db.query(sqlSaldo, [monto, id],(err,result) => {
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