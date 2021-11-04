const valiMonto = require('../MVC/EstudianteBO2Monto.js')
const Monto = require('../MVC/MontoObj.js')


describe("Main flow", () => {

    test('la validacion del cambio de monto es correcta ',() => {
        const m = new Monto('1234567', 'CC', 5500)
    
            expect(valiMonto.validateSome(m)).toStrictEqual(
                {
                    isID: true,
                    isMonto:true,
                    AllGood:true
                }
            )
    })

    test('la validacion del cambio de monto falla por monto muy alto ',() => {
        const m = new Monto('1234567', 'CC', 550000000)
    
            expect(valiMonto.validateSome(m)).toStrictEqual(
                {
                    isID: true,
                    isMonto:false,
                    AllGood:false
                }
            )
    })

    test('la validacion del cambio de monto falla por monto muy bajo ',() => {
        const m = new Monto('1234567', 'CC', -5500)
    
            expect(valiMonto.validateSome(m)).toStrictEqual(
                {
                    isID: true,
                    isMonto:false,
                    AllGood:false
                }
            )
    })


    test('la validacion del cambio de monto falla por id muy largo ',() => {
        const m = new Monto('1234567123412341234212', 'CC', 5500)
    
            expect(valiMonto.validateSome(m)).toStrictEqual(
                {
                    isID: false,
                    isMonto:true,
                    AllGood:false
                }
            )
    })

})