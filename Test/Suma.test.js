const suma = require('./Suma')

test('sumar 1 y 2 da 3', () => {
    expect(suma(1,2)).toBe(3);
})