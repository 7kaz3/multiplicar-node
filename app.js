const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

const argv = require('./config/yargs').argv;

const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err);
        })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Tabla del ${argv.base} al ${argv.limite} creada!`);
        }).catch(err => {
            console.log(err);
        })
        break;
    default:
        console.log('comando no reconocido');
}