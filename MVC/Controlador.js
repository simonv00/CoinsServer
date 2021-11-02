/* import Estudiante from './Estudiante.js'
import validacion from './EstudianteBO.js' */

const Estudiante = require('./Estudiante')
const validacion = require('./EstudianteBO')

//esta funcion crea los objetos estudiantes y los remite a la validacion

module.exports = function controlador(Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado,esEstudiante, carrera,callback) {
    const student = new Estudiante(Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado, esEstudiante, carrera)
    console.log('Estudiante: ',student)
    return validacion.validateInsert(student,(value)=>{
        return callback(value)
    })
}

/* export default controlador */
