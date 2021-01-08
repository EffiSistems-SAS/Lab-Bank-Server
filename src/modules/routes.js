//Importacion de las rutas de los componentes
const routerClient = require('../components/clienteNetwork');
const routerAccount = require('../components/cuentaNetwork');
const routerOperation = require('../components/operacionNetwork');
const routerDebito = require('../components/tarjetaNetwork');

const router = (server) => {
    server.use('/client',routerClient);
    server.use('/account',routerAccount);
    server.use('/operation',routerOperation);
    server.use('/card',routerDebito);
}

module.exports = router;