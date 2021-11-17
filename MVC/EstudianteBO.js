const v = require('validator')
const checkStudent = require('./EstudianteDAOCheck.js')
const insertStudent = require('./EstudianteDAO.js')

var ItSaved = false
module.exports = class EstudianteBO{

// este es el Bussiness Object, aca se validan los datos, con las siguientes funciones
    static validateInsert(estudiante,callback){
        const {isNombre1, isNombre2,isApellido1,isApellido2,isCorreo,isTelefono,isID,isMonto,AllGood,isCarrera }=this.validateAll(estudiante)
        var AllGood2 = true
        const y = checkStudent(estudiante, AllGood, (value1)=>{
            const x = insertStudent(estudiante,value1, (value)=>{
                return callback({
                    isNombre1,
                    isNombre2,
                    isApellido1,
                    isApellido2,
                    isCorreo,
                    isTelefono,
                    isID,
                    isMonto,
                    isCarrera,
                    ItSaved: value
                })
            })
        })
    }

    static validateAll(estudiante){

        const {nombre1, nombre2, apellido1, apellido2, telefono, correo, id, tipoID, monto, estado, esEstudiante, carrera} = estudiante
            const isNombre1 = this.validateAlpha(nombre1)
            const isNombre2 = this.validateAlpha2(nombre2)
            const isApellido1 = this.validateAlpha(apellido1) 
            const isApellido2 = this.validateAlpha2(apellido2)
            const isCorreo = this.validateMail(correo) 
            const isTelefono = this.validateNumber(telefono)
            const isID = this.validateID(id)
            const isMonto = this.validateMonto(monto)
            const isCarrera = this.validateCarrera(carrera,esEstudiante)

        const AllGood =(
            isNombre1 &&
            isNombre2 &&
            isApellido1 &&
            isApellido2 &&
            isCorreo &&
            isTelefono &&
            isID &&
            isCarrera &&
            isMonto    
        )?true:false

        return {
            isNombre1,
            isNombre2,
            isApellido1,
            isApellido2,
            isCorreo,
            isTelefono,
            isID,
            isMonto,
            isCarrera,
            AllGood:AllGood
        }

    }

    static validateAlpha(data){
        var aprobado = (v.isAlpha(data) && v.isLength(data, 1, 45))
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }

    static validateAlpha2(data){
        var aprobado = (v.isLength(data, 0, 45) && v.isAlpha(data)) || data.length === 0
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }

    static validateNumber(data){
        var aprobado = (v.isNumeric(data.toString()) && v.isLength(data.toString(), 7,10) )
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }

    static validateMail(data){
        var aprobado = (v.isEmail(data) && v.isLength(data,1,45) && v.contains(data,'@eia.edu.co'))
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
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

    static validateCarrera(data, esEstudiante){
        if (!esEstudiante){return true}
        var aprobado = (v.isLength(data,1,45))
        if(!aprobado) console.log(' fallando aqui con '+ data)
        return aprobado
    }
} 

/* export default EstudianteBO */