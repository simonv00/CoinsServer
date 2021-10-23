

describe("Main flow", async () => {


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
        
            const id = await browser.$('#id');
            id.setValue('');
        
            await browser.pause(30);
        
            const myButton = await $('#boton')
            await myButton.click()
        
            await browser.pause(100);
        
            const error = await $('#error');
            await expect(await error.getText()).toEqual('tienes un error en tu primer nombre');
        });
})

// 'tienes un error en tu primer nombre'
//error.getText()