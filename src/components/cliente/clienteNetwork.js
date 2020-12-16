const express = require('express');
const routerClient = express.Router();
const Dao = require('../../common/Dao');
const { succes , error} = require('../../common/response');
const { createDataMiddleware } = require('../../common/middlewares');

let clientDao = new Dao();

routerClient.get('/',(request,response) => {
    clientDao.getAll('Cliente')
        .then((res) => {
            succes(request,response,res,200);
        })
        .catch((e) => {
            error(request,response,e,500);
        });
});

routerClient.get('/view/',(request,response) => {
    clientDao.get('Cliente',request.body.id)
        .then((res) => {
            succes(request,response,res,200);
        })
        .catch((e) => {
            error(request,response,e,500);
        });
});

routerClient.post('/create',createDataMiddleware,(request,response) => {
    clientDao.create('Cliente',request.values)
        .then((data) => {
            succes(request,response,data,201);
        })
        .catch((err) => {
            error(request,response,err,501);
        });
})


module.exports = routerClient;