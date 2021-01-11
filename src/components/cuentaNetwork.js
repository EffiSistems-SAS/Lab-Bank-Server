const express = require('express');
const routerAccount = express.Router();
const Dao = require('../common/Dao');
const { succes , error } = require('../common/response');

let accountDao = new Dao();

routerAccount.get('/view/:id?',(request,response) => {
    accountDao.get('Cuenta',request.query.id)
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

routerAccount.get('/get/:id?',(request,response)=>{
    accountDao.sendRequest(`SELECT * FROM Cuenta WHERE idTarjeta = ${parseInt(request.query.id)};`)
        .then((data) => {
            succes(response,data,200);
        }).catch((err) => {
            error(response,err,404);
        });
});

routerAccount.put('/edit/:id?',(request,response) => {
    accountDao.update('Cuenta',request.body,request.query.id)
        .then((data) => {
            succes(response,data,202);
        }).catch((err) => {
            error(response,err,503);
        });
});asdg

module.exports = routerAccount;

