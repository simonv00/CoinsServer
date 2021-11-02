// DTO objeto de transferencia de datos, estudiante
module.exports = class MontoObj {
    constructor(id,tipoID,monto) {
        this.id = id
        this.tipoID = tipoID
        this.monto = monto
    }

    get monto() {
        return this._monto
    }

    set monto(newMonto) {
        this._monto = newMonto
    }

    get tipoID() {
        return this._tipoID
    }

    set tipoID(newTipoID) {
        this._tipoID = newTipoID
    }

    get id() {
        return this._id
    }

    set id(newId) {
        this._id = newId
    }
}




/* export default Estudiante */