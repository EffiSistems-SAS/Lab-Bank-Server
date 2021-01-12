//Importacion de las rutas de los componentes
const routerClient = require("../components/clienteNetwork");
const routerAccount = require("../components/cuentaNetwork");
const routerDebito = require("../components/tarjetaNetwork");
const routerClienteAccount = require("../components/operacionClienteNetwork");

const router = (server) => {
  server.use("/client", routerClient);
  server.use("/account", routerAccount);
  server.use("/card", routerDebito);
  server.use("/clientAccount", routerClienteAccount);
};

module.exports = router;
