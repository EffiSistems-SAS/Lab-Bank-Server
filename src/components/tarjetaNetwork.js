const express = require('express');
const routerDebito = express.Router();
const Dao = require('../common/Dao');
const { succes , error } = require('../common/response');

let tarjetaDebitoDao = new Dao();

routerDebito.get('/view/:id?',(request,response) => {
    tarjetaDebitoDao.get('TarjetaDebito',request.query.id)
        .then((data) => {
            succes(response,data,200);
        }).catch((err) => {
            error(response,err,404);
        });
});


module.exports = routerDebito;