const MensajeObj = require('./MensajeObj')
const validacion = require('./EstudianteBO4Mensaje')

module.exports = function controladorMonto(Numero_Documento, Tipo_Documento, Mensaje,callback) {
    const mensajeObj = new MensajeObj(Numero_Documento, Tipo_Documento, Mensaje)
    console.log('mensaje obj: ',mensajeObj)
    return validacion.validateMensaje(mensajeObj,(value)=>{
        return callback(value)
    })
}
