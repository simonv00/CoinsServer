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

module.exports = async function checkStudent(estudiante,AllGood, callback) {

    if (!AllGood) return callback(false) // esta opcion verifica que todas las validfaciones esten correctas
    const sqlExists = "SELECT * from estudiantes WHERE Numero_Documento= (?) OR Correo = (?)";
    const {id,nombre1,nombre2,apellido1,apellido2,telefono,tipoID,correo,monto,estado, esEstudiante,carrera} = estudiante;
  
    db.query(sqlExists, [id, correo], (err, result) => {
      console.log(result)
      if (result.length == 0) {
        // El dato no esta en la base de datos
        return callback(true);
      } else {
        //hay un error, probablemente un dato duplicado
        return callback(false);
      }
    });
  }