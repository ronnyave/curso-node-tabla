const { Console } = require('console');
const fileSystems = require('fs');
const { Module } = require("module");
const { resolve } = require('path');
const color=require('colors');

const crearArchivo = async(base ,listar=false,hasta=10) => {

    try {
        
       
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i}=${base * i}\n`;
        }
        
        if (listar) {
            
            console.log('=========================================='.red);
            console.log('           TABLA DEL:'.bgGreen, color.bgGreen(base));
            console.log('=========================================='.red);
            
            console.log(salida);
                
            }

        

        fileSystems.writeFileSync(`./salida/Tabla-del-${base}.txt`, salida);

        return `Tabla-del-${base}.txt`;
    } catch (err) {
        throw err;

    }
    
    

}
  
    module.exports = {
        crearArchivo: crearArchivo
    }
        
  