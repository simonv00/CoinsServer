import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import controlador from './MVC/Controlador.js'
const app = express()
import mySql from 'mysql'

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

//objeto de conexion con base de datos
const db = mySql.createPool({
    host: 'localhost' ,
    user: 'root' ,
    password: '011298' ,
    database: 'Coins'
});


// en este metodo se obtienen los estudiantes de la base de datos y se remiten al frontend
app.get('/Listar/api/get', (req, res) => {
    const sqlInsert = "SELECT * FROM estudiantes"
    db.query(sqlInsert, (err, result) => {
        res.send(result)
    })
})


// en este metodo se obtiene la info de los estudiantes, luego se valida o rechaza, y se devuelve el mensaje al front
app.post('/Registro/api/insert', (req,res) => {
    try {
        const {Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado} = req.body
        const x = controlador(Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado,(value)=>{
            console.log(value)
            return res.send(value).status(200)
        })
    } catch (error) {
        //throw error
        console.log(error)
        return res.send("bad request").status(400)
    }
})




app.delete('/Registro/api/delete', (req,res) => {
    try {
        const {Numero_Documento} = req.body
        const x = controladorDelete(Numero_Documento)
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

