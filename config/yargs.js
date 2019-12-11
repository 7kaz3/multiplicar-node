const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Esto crea un txt con la tabla de multiplicar con la base y el limite ingresado', opts)
    .help()
    .argv;

module.exports = {
    argv
}