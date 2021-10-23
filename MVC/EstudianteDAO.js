/* import mySql from "mysql"; */

const mySql = require('mysql')

// conexion con la base de datos
const db = mySql.createPool({
  host: "localhost",
  user: "root",
  password: "011298",
  database: "Coins",
});


// funcion donde se inserta estudiante en base de datos
module.exports = async function insertStudent(estudiante,AllGood, callback) {

    if (!AllGood) return callback(false) // esta opcion verifica que todas las validfaciones esten correctas
    const sqlExists = "SELECT * from estudiantes WHERE Numero_Documento= (?) OR Correo = (?)";
    const sqlInsert = "INSERT INTO estudiantes (Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado, esEstudiante,carrera) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    const {id,nombre1,nombre2,apellido1,apellido2,telefono,tipoID,correo,monto,estado, esEstudiante,carrera} = estudiante;

    db.query(sqlExists, [id, correo], (err, result) => {
    if (result.length == 0) {
        db.query(sqlInsert,[id,nombre1,nombre2,apellido1,apellido2,telefono,tipoID,correo,monto,estado,esEstudiante,carrera],(err, result) => {
            if (err) {
              
                return callback(false)
            }
            /* console.log('added to db successfully') */
        }
      );
      // la insercion fue correcta
      return callback(true);
    } else {
      
      //hay un error, probablemente un dato duplicado
      return callback(false);
    }
  });
}


function deleteStudent(estudiante) {
  const sqlInsert = "DELETE FROM estudiantes WHERE Numero_Documento = (?)";
  const { id } = estudiante;
  db.query(sqlInsert, [id], (err, result) => {
    if (err) {
      throw err; // Aca esta el problema. Es cuando se envia un dato erroneo o duplicado.
    }
    console.log(result);
  });
}

/* export default insertStudent */
