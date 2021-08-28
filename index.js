import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import controlador from './MVC/Controlador.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

    app.post('/Registro/api/insert', (req,res) => {
    const {Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado} = req.body
    controlador(Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado)
})

app.listen(3001,()=>{
    console.log('running on 3001')
})

