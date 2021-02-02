const express = require('express');
const routerDebito = express.Router();
const Dao = require('../common/Dao');
const { succes , error } = require('../common/response');
const { parseString } = require('../common/proccesData');

let tarjetaDebitoDao = new Dao();

routerDebito.get('/view/:id?',(request,response) => {
    tarjetaDebitoDao.get('TarjetaDebito',parseString(request.query.id))
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

routerDebito.put('/wrong-access/:id?',(request,response) => {
    tarjetaDebitoDao.update('TarjetaDebito',request.body,parseString(request.query.id))
    .then((data)=>{
        succes(response,data,200);
    }).catch((err)=>{
        error(response,'',404);
    });
});

module.exports = routerDebito;