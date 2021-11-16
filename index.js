/* import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import controlador from './MVC/Controlador.js'
import mySql from 'mysql' */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const controlador = require('./MVC/Controlador.js')
const controladorMonto = require('./MVC/ControladorMonto2.js')
const controladorPlaca = require('./MVC/ControladorPlaca.js')
const controladorMensaje = require('./MVC/ControladorMensaje.js')
const mySql = require('mysql')

const app = express()

app.use(cors())

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

//objeto de conexion con base de datos
const db = mySql.createPool({
    //host: 'localhost' ,
    //user: 'root' ,
    //password: 'pinguino' ,
    //database: 'Coins'
    database: 'sql10448835',
    user: 'sql10448835',
    host: 'sql10.freemysqlhosting.net',
    password: 'ssU2dhtbJz',
});


// en este metodo se obtienen los estudiantes de la base de datos y se remiten al frontend
app.get('/Listar/api/get', (req, res) => {
    const sqlInsert = "SELECT * FROM estudiantes"
    console.log("result")
    db.query(sqlInsert, async(err, result) => {
        await console.log(result)
        res.send(result)
    })
})

app.get('/Listar/api/getPlaca', (req, res) => {
    try {
        const {Numero_Documento} = req.body
        const sqlInsert = "SELECT * FROM Placas"
        console.log("result")
        db.query(sqlInsert, async(err, result) => {
            await console.log(result)
            res.send(result)
        })
    } catch (error) {
        //throw error
        console.log(error)
        return res.send("bad request").status(400)
    }
})

app.get('/Listar/api/getMensaje', (req, res) => {
    try {
        const {Numero_Documento} = req.body
        const sqlInsert = "SELECT * FROM Mensajes"
        console.log("result")
        db.query(sqlInsert, async(err, result) => {
            await console.log(result)
            res.send(result)
        })
    } catch (error) {
        //throw error
        console.log(error)
        return res.send("bad request").status(400)
    }
})

// en este metodo se obtiene la info de los estudiantes, luego se valida o rechaza, y se devuelve el mensaje al front
app.post('/Registro/api/insert', (req,res) => {
    try {
        const {Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado, esEstudiante,carrera} = req.body
        const x = controlador(Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado, esEstudiante,carrera,(value)=>{
            console.log(value)
            return res.send(value).status(200)
        })
    } catch (error) {
        //throw error
        console.log(error)
        return res.send("bad request").status(400)
    }
})

app.post('/Registro/api/changeMonto', (req,res) => {
    try {
        const {Numero_Documento, Tipo_Documento, Saldo} = req.body
        console.log(Saldo)
        const x = controladorMonto(Numero_Documento, Tipo_Documento,Saldo,(value)=>{
            console.log(value)
            return res.send(value).status(200)
        })
    } catch (error) {
        //throw error
        console.log(error)
        return res.send("bad request").status(400)
    }
})

app.post('/Registro/api/agregarPlaca', (req,res) => {
    try {
        const {Numero_Documento, Placa} = req.body
        console.log(Placa)
        const x = controladorPlaca(Numero_Documento,Placa,(value)=>{
            console.log(value)
            return res.send(value).status(200)
        })
    } catch (error) {
        //throw error
        console.log(error)
        return res.send(error).status(400)
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

app.post('/Registro/api/agregarMensaje', (req,res) => {
    try {
        const {Numero_Documento, Tipo_Documento, Mensaje} = req.body
        console.log(Mensaje)
        const x = controladorMensaje(Numero_Documento, Tipo_Documento,Mensaje,(value)=>{
            console.log(value)
            return res.send(value).status(200)
        })
    } catch (error) {
        //throw error
        console.log(error)
        return res.send("bad request").status(400)
    }
})

app.listen(process.env.PORT || 3001,()=>{
    console.log('running on 3001')
})

