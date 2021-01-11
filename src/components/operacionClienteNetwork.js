const express = require('express');
const routerRelation = express.Router();
const Dao = require('../common/Dao');
const { succes , error } = require('../common/response');
const { createDataMiddleware } = require('../common/middlewares');

let routerDao = new Dao();

routerRelation.post('/create',createDataMiddleware,(request,response) => {
    routerDao.create('Operacion_Cliente',request.values)
        .then((data) => {
            succes(response,data,201);
        })
        .catch((err) => {
            error(response,err,401);
        });
});

module.exports = routerRelation;