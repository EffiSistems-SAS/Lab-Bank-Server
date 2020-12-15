//Importacion de las rutas de los componentes
const routerClient = require('../components/cliente/clienteNetwork');

const router = (server) => {
    server.use('/client',routerClient);
}

module.exports = router;