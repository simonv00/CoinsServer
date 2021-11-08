// DTO objeto de transferencia de datos, estudiante
module.exports = class PlacaObj {
    constructor(id,tipoID,placa) {
        this.id = id
        this.tipoID = tipoID
        this.placa = placa
    }

    get placa() {
        return this._placa
    }

    set placa(newPlaca) {
        this._placa = newPlaca
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


