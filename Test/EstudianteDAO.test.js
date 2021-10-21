const insert = require('../MVC/EstudianteDAO.js')
const Estudiante = require('../MVC/Estudiante.js')

    test('insercion correcta en la base de datos', done => {
        const e = new Estudiante(
            '1035667333',
            'camilo',
            '',
            'isaza',
            '',
            12345687,
            'CC',
            'camilito.fsfisaza3@eia.edu.com',
            4000,
            true
        )

        insert(e,true, (value) =>{
        try{

            expect(value).toBe(false)
            done()
        }catch(e){
            done(e)
        }
        })
    })