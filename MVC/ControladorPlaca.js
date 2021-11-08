const PlacaObj = require('./PlacaObj')
const validacion = require('./EstudianteBO3Placa')

module.exports = function controladorMonto(Numero_Documento, Tipo_Documento, Placa,callback) {
    const placaObj = new PlacaObj(Numero_Documento, Tipo_Documento, Placa)
    console.log('placa obj: ',placaObj)
    return validacion.validatePlaca(placaObj,(value)=>{
        return callback(value)
    })
}
