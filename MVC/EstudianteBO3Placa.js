const v = require('validator')
const checkStudentID = require('./EstudianteDAOCheckID.js')
const agregarPlaca = require('./EstudianteDAOPlaca.js')

var ItSaved = false
module.exports = class EstudianteBO3Placa{

    // este es el Bussiness Object, aca se validan los datos, con las siguientes funciones

    static validatePlaca(montoObj,callback){
        const {isID,isMonto,AllGood}=this.validateSome(montoObj)

        const y = checkStudentID(montoObj, AllGood, (value1)=>{
            const x = changeMonto(montoObj, value1, (value)=>{
                return callback({
                    isID,
                    isMonto,
                    ItSaved: value
                })
            })
        })

    }

    static validateSome(montoObj){
        const {id, tipoID, monto} = montoObj

        const isID = this.validateID(id)
        const isMonto = this.validateMonto(monto)
        const AllGood =(
            isID &&
            isMonto    
        )?true:false
        return {
            isID,
            isMonto,
            AllGood:AllGood
        }
    }


    static validateMonto(data){
        var aprobado = (v.isNumeric(data.toString()) && data > -5000 && data < 500000)
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }

    static validateID(data){
        var aprobado = (v.isLength(data,1,20))
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }
} 

/* export default EstudianteBO */