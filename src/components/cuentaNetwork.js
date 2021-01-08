const express = require('express');
const routerAccount = express.Router();
const Dao = require('../common/Dao');
const { succes , error } = require('../common/response');

let accountDao = new Dao();

routerAccount.get('/view/:id?',(request,response) => {
    accountDao.get('Cuenta',request.query.id)
        .then((data) => {
            succes(response,data,200);
        })
        .catch((err) => {
            error(response,err,404);
        });
});

routerAccount.get('/',(request,response) => {
    accountDao.getAll('Cuenta')
        .then((data) => {
            succes(response,data,200);
        })
        .catch((err) => {
            error(response,err,404);
        });
});

module.exports = routerAccount;

