//imprimir la tabla del 5
//const fileSystems=require('fs');

const{crearArchivo}=require('./helpers/multiplicar2')
const argv=require('./config/yargs');

require('colors');
//console.log(process.argv);
//const yargs = require('yargs/yargs')
//const { hideBin } = require('yargs/helpers')
//console.log(process.argv);
//console.log('base:yargs',argv.b);
console.clear();
crearArchivo(argv.b,argv.l,argv.h)
.then (nombreArchivo=>console.log(nombreArchivo.rainbow,'creado con exito'))
.catch(err=>console.log(err))

//console.log('base:yargs',argv.base);

//const base=9;

//console.log(process.argv);
// const[, , arg3='base5']=process.argv;
// const[,base=5]=arg3.split('=');
//  console.log(base);

/*console.log("==========================================")
console.log("           TABLA DEL 5                    ")
console.log("==========================================")
const base =6 ;

let salida = '';
for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i}=${base * i}\n`;
}

console.log(salida);

fileSystems.writeFileSync(`Tabla-del-${base}.txt`,salida);

console.log(`Tabla-del-${base}.txt creado`);
*/






