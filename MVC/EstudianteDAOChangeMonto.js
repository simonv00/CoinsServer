/* import mySql from "mysql"; */

const mySql = require('mysql')

// conexion con la base de datos
const db = mySql.createPool({
  /*host: "localhost",
  user: "root",
  password: "pinguino",
  database: "Coins",*/
  database: 'heroku_d82a79d0d95c282',
  username: 'b57ee4f0f0f1e3',
  host: 'us-cdbr-east-04.cleardb.com',
  password: '0646d789',
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