// DTO objeto de transferencia de datos, estudiante
module.exports = class MensajeObj {
    constructor(id,tipoID,mensaje) {
        this.id = id
        this.tipoID = tipoID
        this.mensaje = mensaje
    }

    get mensaje() {
        return this._mensaje
    }

    set mensaje(newMensaje) {
        this._mensaje = newMensaje
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


