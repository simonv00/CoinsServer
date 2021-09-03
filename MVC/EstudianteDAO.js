import mySql from 'mysql'

const db = mySql.createPool({
    host: 'localhost' ,
    user: 'root' ,
    password: '011298' ,
    database: 'Coins'
});

export default function insertStudent(estudiante){
    const sqlInsert = "INSERT INTO estudiantes (Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado) VALUES (?,?,?,?,?,?,?,?,?,?)"
    const {id,nombre1, nombre2, apellido1, apellido2, telefono,tipoID, correo,  monto, estado} = estudiante
    db.query(sqlInsert, [id,nombre1, nombre2, apellido1, apellido2, telefono,tipoID, correo,  monto, estado] , (err, result) => {
        if(err){
            throw err
        }
        console.log(result)
    })
    
} 

