describe('Main flow', async  ()=> {
    it('should send the data correctly', async  () => {
    await browser.url('./');
    
    const nombre1 = await browser.$('#nombre1');
nombre1.setValue('Simon');

const nombre2 = await browser.$('#nombre2');
nombre2.setValue('');

const apellido1 = await browser.$('#apellido1');
apellido1.setValue('Valencia');

const apellido2 = await browser.$('#apellido2');
apellido2.setValue('Ochoa');

const correo = await browser.$('#correo');
correo.setValue('ssimon.valencia@eia.edu.co');

const telefono = await browser.$('#telefono');
telefono.setValue('3156047357');

const id = await browser.$('#id');
id.setValue('31560a47d57');

const radio= await $('#checkStudent')
await radio.click()

const carrera = await browser.$('#carrera');
carrera.setValue('Ing. Sistemas');

/* await setTimeout(()=> {
    console.log('aca en timeout')
},3000) */
await browser.pause(30);

const myButton = await $('#boton')
await myButton.click()

await browser.pause(3000);

const error = await $('#error');
console.log(await error.getText());

await browser.pause(30000);

    /* await browser.setValue('#nombre1', 'Simon'); */
/*     browser.setValue('#nombre2', '');
    browser.setValue('#apellido1', 'Valencia');
    browser.setValue('#apellido2', 'Ochoa');
    browser.setValue('#correo', 'simon.valencia@eia.edu.co');
    browser.setValue('#telefono', '3156047357');
    browser.setValue('#id', '10012315as');
    
    const button = $('input[id = "boton"');
    button.click();
    browser.debug(); */
    browser.debug();
    });
    });