const v = require('validator')
const checkStudentID = require('./EstudianteDAOCheckID.js')
const agregarMensaje = require('./EstudianteDAOMensaje.js')

var ItSaved = false
module.exports = class EstudianteBO4Mensaje{

    // este es el Bussiness Object, aca se validan los datos, con las siguientes funciones

    static validateMensaje(mensajeObj,callback){
        const {isID,isMensaje,AllGood}=this.validateSome(mensajeObj)

        const y = checkStudentID(mensajeObj, AllGood, (value1)=>{
            const x = agregarMensaje(mensajeObj, value1, (value)=>{
                return callback({
                    isID,
                    isMensaje,
                    ItSaved: value
                })
            })
        })

    }

    static validateSome(mensajeObj){
        const {id, tipoID, mensaje} = mensajeObj

        const isID = this.validateID(id)
        const isMensaje = this.validateMensajee(mensaje)
        const AllGood =(
            isID &&
            isMensaje   
        )?true:false
        return {
            isID,
            isMensaje,
            AllGood:AllGood
        }
    }


    static validateMensajee(data){
        var aprobado = (v.isLength(data,1,100))
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