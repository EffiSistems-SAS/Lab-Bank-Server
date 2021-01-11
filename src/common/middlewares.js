const { parseString } = require('./proccesData');

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


module.exports = {
    createDataMiddleware,
    dataMiddleWare
}