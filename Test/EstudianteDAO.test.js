const insert = require('../MVC/EstudianteDAO.js')
const Estudiante = require('../MVC/Estudiante.js')

    test('insercion correcta en la base de datos',async done => {
        const e = new Estudiante(
            '1035667331',
            'camilo',
            '',
            'isaza',
            '',
            12345687,
            'CC',
            'camilito.fsfiza313@eia.edu.co',
            4000,
            true,
            true,
            'Ing Sistemas'
        )

        insert(e, true, (value) =>{
        try{

            expect(value).toBe(true)
            done()
        }catch(e){
            done(e)
        }
        })
    })