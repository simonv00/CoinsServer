const MontoObj = require('./MontoObj')
const validacion = require('./EstudianteBO2Monto')

module.exports = function controladorMonto(Numero_Documento, Tipo_Documento, monto,callback) {
    const montoObj = new MontoObj(Numero_Documento, Tipo_Documento, monto)
    console.log('monto obj: ',montoObj)

    return validacion.validateCambio(montoObj,(value)=>{
        return callback(value)
    })
}
