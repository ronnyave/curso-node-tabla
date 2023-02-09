const fileSystems = require('fs');
const { Module } = require("module");
const { resolve } = require('path');

const crearArchivo = (base = 5) => {

    return new Promise( (resolve, reject) => {
       
        console.log('==========================================');
        console.log('           TABLA DEL 5:', base);
        console.log('==========================================');

        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i}=${base * i}\n`;
        }

        console.log(salida);

        fileSystems.writeFileSync(`Tabla-del-${base}.txt`, salida);

        resolve(`Tabla-del-${base}.txt`);

    })

}
  
    module.exports = {
        crearArchivo: crearArchivo
    }
        
  