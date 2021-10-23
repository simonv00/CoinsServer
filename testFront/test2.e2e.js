describe("Main flow", async () => {
    it("Prueba inicial", async () => {
        await browser.url("./");

        const nombre1 = await browser.$("#nombre1");
        nombre1.setValue("Simon");

        const nombre2 = await browser.$("#nombre2");
        nombre2.setValue("");

        const apellido1 = await browser.$("#apellido1");
        apellido1.setValue("Valencia");

        const apellido2 = await browser.$("#apellido2");
        apellido2.setValue("Ochoa");

        const correo = await browser.$("#correo");
        correo.setValue("ssimon.valencia@eia.edu.co");

        const telefono = await browser.$("#telefono");
        telefono.setValue("3156047357");

        const id = await browser.$("#id");
        id.setValue("31560a47d57");

        const radio = await $("#checkStudent");
        await radio.click();

        const carrera = await browser.$("#carrera");
        carrera.setValue("Ing. Sistemas");

        /* await setTimeout(()=> {
    console.log('aca en timeout')
},3000) */
        await browser.pause(30);

        const myButton = await $("#boton");
        await myButton.click();

        await browser.pause(3000);

        const error = await $("#error");
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

    it('TC #1 - Se guarda el usuario en la base de datos', async  () => {
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
        correo.setValue('hola1.valencia@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('0863hd68e73');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('');
    });
    
    it('TC #2 - Campos vacios, error en primer nombre', async  () => {
        await browser.url('./');
        
        const nombre1 = await browser.$('#nombre1');
        nombre1.setValue('');
    
        const nombre2 = await browser.$('#nombre2');
        nombre2.setValue('');
    
        const apellido1 = await browser.$('#apellido1');
        apellido1.setValue('');
    
        const apellido2 = await browser.$('#apellido2');
        apellido2.setValue('');
    
        const correo = await browser.$('#correo');
        correo.setValue('');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('');
    
        const id = await browser.$('#');
        id.setValue('');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu primer nombre');
    });
    
    it('TC #3 - Se escribe mal el primer nombre', async  () => {
        await browser.url('./');
        
        const nombre1 = await browser.$('#nombre1');
        nombre1.setValue('Simon21');
    
        const nombre2 = await browser.$('#nombre2');
        nombre2.setValue('');
    
        const apellido1 = await browser.$('#apellido1');
        apellido1.setValue('Valencia');
    
        const apellido2 = await browser.$('#apellido2');
        apellido2.setValue('Ochoa');
    
        const correo = await browser.$('#correo');
        correo.setValue('hola12.valencia@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('67893jd7929837');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu primer nombre');
    });
    
    it('TC #4 - Se escribe mal el segundo nombre', async  () => {
        await browser.url('./');
        
        const nombre1 = await browser.$('#nombre1');
        nombre1.setValue('Simon');
    
        const nombre2 = await browser.$('#nombre2');
        nombre2.setValue('Juan54');
    
        const apellido1 = await browser.$('#apellido1');
        apellido1.setValue('Valencia');
    
        const apellido2 = await browser.$('#apellido2');
        apellido2.setValue('Ochoa');
    
        const correo = await browser.$('#correo');
        correo.setValue('cristina.arango111@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('31j47d57');
    
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu segundo nombre');
    });
    
    it('TC #5 - Se escribe mal el primer apellido', async  () => {
        await browser.url('./');
        
        const nombre1 = await browser.$('#nombre1');
        nombre1.setValue('Simon');
    
        const nombre2 = await browser.$('#nombre2');
        nombre2.setValue('');
    
        const apellido1 = await browser.$('#apellido1');
        apellido1.setValue('Valencia21');
    
        const apellido2 = await browser.$('#apellido2');
        apellido2.setValue('Ochoa');
    
        const correo = await browser.$('#correo');
        correo.setValue('cristina.arango222@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('79736289382he');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en primer apellido');
    });
    
    it('TC #6 - Se escribe mal el segundo apellido', async  () => {
        await browser.url('./');
        
        const nombre1 = await browser.$('#nombre1');
        nombre1.setValue('Simon');
    
        const nombre2 = await browser.$('#nombre2');
        nombre2.setValue('');
    
        const apellido1 = await browser.$('#apellido1');
        apellido1.setValue('Valencia');
    
        const apellido2 = await browser.$('#apellido2');
        apellido2.setValue('Ochoa45');
    
        const correo = await browser.$('#correo');
        correo.setValue('cristina.arango3333@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('892q8he72629138');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu segundo apellido');
    });
    
    it('TC #7 - Se escribe mal el correo', async  () => {
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
        correo.setValue('cristina.arango@gmail.com');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('8287e8237y73');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu correo');
    });
    
    it('TC #8 - Se escribe mal el telefono', async  () => {
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
        correo.setValue('cristina.arango55555@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('31560473fv57');
    
        const id = await browser.$('#id');
        id.setValue('61283187236');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu telefono');
    });
    
    it('TC #9 - id repetido', async  () => {
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
        correo.setValue('cristina.arango6666@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('0863hd68e73');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('El id o el correo esta repedito, prueba otro');
    });
    
    it('TC #10 - correo repetido', async  () => {
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
        correo.setValue('hola1.valencia@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('31hj47gasfdf7');
    
        const radio= await $('#checkStudent')
        await radio.click()
    
        const carrera = await browser.$('#carrera');
        carrera.setValue('Ing. Sistemas');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('El id o el correo esta repedito, prueba otro');
    });
});

describe("Alternative flow", async () => {
    it("Prueba inicial", async () => {
        await browser.url("./");

        const nombre1 = await browser.$("#nombre1");
        nombre1.setValue("Simon");

        const nombre2 = await browser.$("#nombre2");
        nombre2.setValue("");

        const apellido1 = await browser.$("#apellido1");
        apellido1.setValue("Valencia");

        const apellido2 = await browser.$("#apellido2");
        apellido2.setValue("Ochoa");

        const correo = await browser.$("#correo");
        correo.setValue("ssimon.valencia@eia.edu.co");

        const telefono = await browser.$("#telefono");
        telefono.setValue("3156047357");

        const id = await browser.$("#id");
        id.setValue("31560a47d57");

        const radio = await $("#checkStudent");
        await radio.click();

        const carrera = await browser.$("#carrera");
        carrera.setValue("Ing. Sistemas");

        /* await setTimeout(()=> {
    console.log('aca en timeout')
},3000) */
        await browser.pause(30);

        const myButton = await $("#boton");
        await myButton.click();

        await browser.pause(3000);

        const error = await $("#error");
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

    it('TC #11 - Se guarda el usuario en la base de datos', async  () => {
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
        correo.setValue('ssiasmon.valencia@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('315hja47d57');
    
        const radio= await $('#checkStudent')
        await radio.click()
    
        const carrera = await browser.$('#carrera');
        carrera.setValue('Ing. Sistemas');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('');
    });
    
    it('TC #12 - Campos vacios, error en primer nombre', async  () => {
        await browser.url('./');
        
        const nombre1 = await browser.$('#nombre1');
        nombre1.setValue('');
    
        const nombre2 = await browser.$('#nombre2');
        nombre2.setValue('');
    
        const apellido1 = await browser.$('#apellido1');
        apellido1.setValue('');
    
        const apellido2 = await browser.$('#apellido2');
        apellido2.setValue('');
    
        const correo = await browser.$('#correo');
        correo.setValue('');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('');
    
        const id = await browser.$('#');
        id.setValue('');
    
        const radio= await $('#checkStudent')
        await radio.click()
    
        const carrera = await browser.$('#carrera');
        carrera.setValue('');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu primer nombre');
    });
    
    it('TC #13 - Se escribe mal el primer nombre', async  () => {
        await browser.url('./');
        
        const nombre1 = await browser.$('#nombre1');
        nombre1.setValue('Simon21');
    
        const nombre2 = await browser.$('#nombre2');
        nombre2.setValue('');
    
        const apellido1 = await browser.$('#apellido1');
        apellido1.setValue('Valencia');
    
        const apellido2 = await browser.$('#apellido2');
        apellido2.setValue('Ochoa');
    
        const correo = await browser.$('#correo');
        correo.setValue('ssighasmon.valencia@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('315hjadh47d57');
    
        const radio= await $('#checkStudent')
        await radio.click()
    
        const carrera = await browser.$('#carrera');
        carrera.setValue('Ing. Sistemas');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu primer nombre');
    });
    
    it('TC #14 - Se escribe mal el segundo nombre', async  () => {
        await browser.url('./');
        
        const nombre1 = await browser.$('#nombre1');
        nombre1.setValue('Simon');
    
        const nombre2 = await browser.$('#nombre2');
        nombre2.setValue('Juan54');
    
        const apellido1 = await browser.$('#apellido1');
        apellido1.setValue('Valencia');
    
        const apellido2 = await browser.$('#apellido2');
        apellido2.setValue('Ochoa');
    
        const correo = await browser.$('#correo');
        correo.setValue('smon.valencia@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('31j47d57');
    
        const radio= await $('#checkStudent')
        await radio.click()
    
        const carrera = await browser.$('#carrera');
        carrera.setValue('Ing. Sistemas');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu segundo nombre');
    });
    
    it('TC #15 - Se escribe mal el primer apellido', async  () => {
        await browser.url('./');
        
        const nombre1 = await browser.$('#nombre1');
        nombre1.setValue('Simon');
    
        const nombre2 = await browser.$('#nombre2');
        nombre2.setValue('');
    
        const apellido1 = await browser.$('#apellido1');
        apellido1.setValue('Valencia21');
    
        const apellido2 = await browser.$('#apellido2');
        apellido2.setValue('Ochoa');
    
        const correo = await browser.$('#correo');
        correo.setValue('smon.vadlencia@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('31j47gd57');
    
        const radio= await $('#checkStudent')
        await radio.click()
    
        const carrera = await browser.$('#carrera');
        carrera.setValue('Ing. Sistemas');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en primer apellido');
    });
    
    it('TC #16 - Se escribe mal el segundo apellido', async  () => {
        await browser.url('./');
        
        const nombre1 = await browser.$('#nombre1');
        nombre1.setValue('Simon');
    
        const nombre2 = await browser.$('#nombre2');
        nombre2.setValue('');
    
        const apellido1 = await browser.$('#apellido1');
        apellido1.setValue('Valencia');
    
        const apellido2 = await browser.$('#apellido2');
        apellido2.setValue('Ochoa45');
    
        const correo = await browser.$('#correo');
        correo.setValue('smon.vadleancia@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('31j47gdd57');
    
        const radio= await $('#checkStudent')
        await radio.click()
    
        const carrera = await browser.$('#carrera');
        carrera.setValue('Ing. Sistemas');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu segundo apellido');
    });
    
    it('TC #17 - Se escribe mal el correo', async  () => {
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
        correo.setValue('smon.vadleancia@gmail.com');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('31j47gdd5a7');
    
        const radio= await $('#checkStudent')
        await radio.click()
    
        const carrera = await browser.$('#carrera');
        carrera.setValue('Ing. Sistemas');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu correo');
    });
    
    it('TC #18 - Se escribe mal el telefono', async  () => {
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
        correo.setValue('smon.vncia@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('31560473fv57');
    
        const id = await browser.$('#id');
        id.setValue('31j47gdd5j7');
    
        const radio= await $('#checkStudent')
        await radio.click()
    
        const carrera = await browser.$('#carrera');
        carrera.setValue('Ing. Sistemas');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('tienes un error en tu telefono');
    });
    
    it('TC #19 - id repetido', async  () => {
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
        correo.setValue('smon.vncasia@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('31j47gdd5j7');
    
        const radio= await $('#checkStudent')
        await radio.click()
    
        const carrera = await browser.$('#carrera');
        carrera.setValue('Ing. Sistemas');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('El id o el correo esta repedito, prueba otro');
    });
    
    it('TC #20 - correo repetido', async  () => {
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
        correo.setValue('smon.vncasia@eia.edu.co');
    
        const telefono = await browser.$('#telefono');
        telefono.setValue('3156047357');
    
        const id = await browser.$('#id');
        id.setValue('31hj47gasfdf7');
    
        const radio= await $('#checkStudent')
        await radio.click()
    
        const carrera = await browser.$('#carrera');
        carrera.setValue('Ing. Sistemas');
    
        await browser.pause(30);
    
        const myButton = await $('#boton')
        await myButton.click()
    
        await browser.pause(100);
    
        const error = await $('#error');
        await expect(error.getText()).to.equal('El id o el correo esta repedito, prueba otro');
    });
});