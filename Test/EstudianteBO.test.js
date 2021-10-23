const validacion = require('../MVC/EstudianteBO')
const Estudiante = require('../MVC/Estudiante')

/* test('la validacion de is alpha de "pablo" es true', () => {
    expect(validacion.validateAlpha('pablo2')).toBe(true)
}) */

test('la validacion de todos los campos es correcta',() => {
    const e = new Estudiante(
        '123123123',
        'pablo',
        '',
        'isaza',
        '',
        12345687,
        'CC',
        'pablito.isaza3@eia.edu.com',
        4000,
        true,
        true,
        ''
    )

        expect(validacion.validateAll(e)).toStrictEqual(
            {
                isNombre1:true,
                isNombre2:true,
                isApellido1:true,
                isApellido2:true,
                isCorreo:true,
                isTelefono:true,
                isID:true,
                isMonto:true,
                AllGood: false,
                isCarrera: false

            }
        )


})
/* 
(Numero_Documento, Primer_Nombre, Segundo_Nombre, Primer_Apellido, Segundo_Apellido, Celular, Tipo_Documento, Correo, Saldo, Estado,callback) */