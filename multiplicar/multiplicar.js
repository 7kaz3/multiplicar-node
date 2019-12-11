/*/
Required 
/*/

const fs = require('fs');
const colors = require('colors');
//const fs = require('express'); son desarrollos (paquetes) de terceros
//const fs = require('./fs'); son archivos que nosotros creamos 

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base) || !Number(limite)) {
            reject('La base o el limite ingresado no es un numero')
            return
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        resolve(data)

    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject('No es un numero')
            return
        }
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}`);
        });

    })
};

module.exports = {
    crearArchivo,
    listarTabla
}