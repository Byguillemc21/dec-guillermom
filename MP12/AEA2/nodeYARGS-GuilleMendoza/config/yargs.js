const opts = {
    base: {
        demand:true,
        alias: 'b',
    },
    limit: {
        alias: "l",
        default: 10,
    },
};

const argv = require("yargs")
            .command('llistar','Imprimeix per consola la taula de multiplicar',opts)
            .command('crear','Genera un fitxer amb la taula de multipilcar',opts)
            .help().argv;

module.exports = {
    argv,
};