const express = require('express');
const routerOperation = express.Router();
const Dao = require('../common/Dao');
const { succes , error } = require('../common/response');
const { createDataMiddleware } = require('../common/middlewares');

let operationDao = new Dao();

routerOperation.post('/create',createDataMiddleware,(request,response) => {
    operationDao.create('Operacion',request.values)
        .then((data) => {
            succes(response,data,201);
        })
        .catch((err) => {
            error(response,err,501);
        });
});

routerOperation.get('/view/:id?',(request,response) => {
    operationDao.get('Operacion',request.query.id)
        .then((data) => {
            if(data.length === 1){
                succes(response,data,200);
            }else{
                error(response,'',404);
            }
        })
        .catch((err) => {
            error(response,err,404);
        });
})


module.exports = routerOperation;
