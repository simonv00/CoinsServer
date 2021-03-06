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


// funcion donde se inserta estudiante en base de datos
module.exports = async function insertStudent(estudiante,AllGood, callback) {
    if (!AllGood) return callback(false) // esta opcion verifica que todas las validfaciones esten correctas
    const sqlInsert = "INSERT INTO estudiantes (Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado, esEstudiante,carrera) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    const {id,nombre1,nombre2,apellido1,apellido2,telefono,tipoID,correo,monto,estado, esEstudiante,carrera} = estudiante;
    console.log(AllGood)

    db.query(sqlInsert,[id,nombre1,nombre2,apellido1,apellido2,telefono,tipoID,correo,monto,estado,esEstudiante,carrera],(err, result) => {
        if (err) {
            console.log(err)
            return callback(false)
        }
        else{
          return callback(true)
        }
    }
  );  
}
