import Estudiante from './Estudiante.js'
import validacion from './EstudianteBO.js'

export default function controlador(Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado) {
    const student = new Estudiante(Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado)
    return validacion.validateAll(student)
} 