const v = require('validator')
const checkStudentID = require('./EstudianteDAOCheckID.js')
const agregarPlaca = require('./EstudianteDAOPlaca.js')

var ItSaved = false
module.exports = class EstudianteBO3Placa{

    // este es el Bussiness Object, aca se validan los datos, con las siguientes funciones

    static validatePlaca(placaObj,callback){
        const {isID,isPlaca,AllGood}=this.validateSome(placaObj)

        const y = checkStudentID(placaObj, AllGood, (value1)=>{
            const x = agregarPlaca(placaObj, value1, (value)=>{
                return callback({
                    isID,
                    isPlaca,
                    ItSaved: value
                })
            })
        })

    }

    static validateSome(placaObj){
        const {id, tipoID, placa} = placaObj

        const isID = this.validateID(id)
        const isPlaca = this.validatePlacaNum(placa)
        const AllGood =(
            isID &&
            isPlaca    
        )?true:false
        return {
            isID,
            isPlaca,
            AllGood:AllGood
        }
    }


    static validatePlacaNum(data){
        var aprobado = (v.isLength(data,5,6))
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