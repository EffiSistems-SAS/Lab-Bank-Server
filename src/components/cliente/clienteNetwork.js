const express = require('express');
const routerClient = express.Router();
const Dao = require('../../common/Dao');
const { succes , error} = require('../../common/response');

let clientDao = new Dao();

routerClient.get('/',(request,response) => {
    clientDao.getAll('Producto')
        .then((res) => {
            succes(request,response,res,200);
        })
        .catch((e) => {
            error(request,response,e,500);
        });
});


module.exports = routerClient;