import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import controlador from './MVC/Controlador.js'
const app = express()
import mySql from 'mysql'

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

const db = mySql.createPool({
    host: 'localhost' ,
    user: 'root' ,
    password: '011298' ,
    database: 'Coins'
});

app.get('/Listar/api/get', (req, res) => {
    const sqlInsert = "SELECT * FROM estudiantes"
    db.query(sqlInsert, (err, result) => {
        res.send(result)
    })
})

app.post('/Registro/api/insert', (req,res) => {
    try {
        const {Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado} = req.body
        const x = controlador(Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado)
        console.log(x)
        return res.send(x).status(200)
    } catch (error) {
        //throw error
        console.log(error)
        return res.send("bad request").status(400)
    }
})

app.listen(3001,()=>{
    console.log('running on 3001')
})
 
