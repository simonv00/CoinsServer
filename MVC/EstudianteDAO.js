import mySql from 'mysql'

const db = mySql.createPool({
    host: 'localhost' ,
    user: 'root' ,
    password: 'pinguino' ,
    database: 'Coins'
});

export default function insertStudent(estudiante){
    const sqlExists = "SELECT * from estudiantes WHERE Numero_Documento= (?) OR Correo = (?)"
    const sqlInsert = "INSERT INTO estudiantes (Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado) VALUES (?,?,?,?,?,?,?,?,?,?)"
    const {id,nombre1, nombre2, apellido1, apellido2, telefono,tipoID, correo,  monto, estado} = estudiante
    db.query(sqlExists,[id, correo], (err,result) => {
        console.log(result)
        if(result.length ==  0){
            db.query(sqlInsert, [id,nombre1, nombre2, apellido1, apellido2, telefono,tipoID, correo,  monto, estado] , (err, result) => {
                if(err){
                    throw err
                }
                else{
                    return true
                }
                console.log(result)
            })
        }
        else{
            console.log("Dato duplicado")
            return false
        }
    })
} 

function deleteStudent(estudiante){
    const sqlInsert = "DELETE FROM estudiantes WHERE Numero_Documento = (?)"
    const {id} = estudiante
    db.query(sqlInsert, [id] , (err, result) => {
        if(err){
            throw err // Aca esta el problema. Es cuando se envia un dato erroneo o duplicado.
        }
        console.log(result)
    })
} 

