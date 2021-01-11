const express = require('express');
const routerDebito = express.Router();
const Dao = require('../common/Dao');
const { succes , error } = require('../common/response');

let tarjetaDebitoDao = new Dao();

routerDebito.get('/view/:id?',(request,response) => {
    tarjetaDebitoDao.get('TarjetaDebito',request.query.id)
        .then((data) => {
            if(data.length === 1){
                succes(response,data,200);
            }else{
                error(response,'',404);
            }
        }).catch((err) => {
            error(response,err,404);
        });
});


module.exports = routerDebito;