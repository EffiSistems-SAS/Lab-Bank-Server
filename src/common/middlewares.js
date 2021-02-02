const { parseString } = require('./proccesData');
const Dao = require('../common/Dao');

const createDataMiddleware = (req,res,next) => {
    let values = [];
    for (let clave in req.body) {
        if (req.body.hasOwnProperty(clave)) {
            values.push(req.body[clave]);
        }
    }
    req.values = values;
    next();
}

const dataMiddleWare = (req,res,next) => {
    req.body.idOperacion_Cliente = parseString(`IDOPCLIENT_${Date.now()}`);
    if(req.body.idCuentaAbonada==='NOACC'){
        req.body.idCuentaAbonada=null;
    }
    if(req.body.Valor==='NOVALUE'){
        req.body.Valor=null;
    }else{
        req.body.Valor=parseInt(req.body.Valor);
    }
    next();
}

const accountMiddleWare = (req,res,next) => {
    let value = (parseInt(req.params['value'])+parseInt(req.newvalue));
    let cuentaDebito = {"montoRetiradoPorDia":value};
    req.body = cuentaDebito;
    next();
}

const getAccount = (req,res,next) => {
    let newDao = new Dao();
    newDao.get('Cuenta',parseString(req.params['id']))
    .then((data)=>{
        req.newvalue = data[0].montoRetiradoPorDia;
        next();
    }).catch((err)=>{

    });
}

module.exports = {
    createDataMiddleware,
    dataMiddleWare,
    accountMiddleWare,
    getAccount
}