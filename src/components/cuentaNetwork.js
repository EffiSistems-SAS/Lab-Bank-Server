const express = require('express');
const routerAccount = express.Router();
const Dao = require('../common/Dao');
const { succes , error } = require('../common/response');
const { parseString } = require('../common/proccesData');
const { accountMiddleWare, getAccount } = require('../common/middlewares');

let accountDao = new Dao();

routerAccount.get('/view/:id?',(request,response) => {
    accountDao.get('Cuenta',parseString(request.query.id))
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

routerAccount.get('/getNumCuenta/:id?',(request,response) => {
    accountDao.sendRequest(`SELECT * FROM Cuenta WHERE numero=${request.query.id}`)
        .then((data) => {
            if(data.length===0){
                error(response,'',404);
            }else{
                succes(response,data,200);
            }
        })
        .catch((err) => {
            console.log(err);
            error(response,err,404);
        });
});

routerAccount.get('/get/:id?',(request,response)=>{
    accountDao.sendRequest(`SELECT * FROM Cuenta WHERE idTarjeta = ${parseString(request.query.id)};`)
        .then((data) => {
            succes(response,data,200);
        }).catch((err) => {
            error(response,err,404);
        });
});

routerAccount.put('/edit/:id?',(request,response) => {
    accountDao.update('Cuenta',request.body,parseString(request.query.id))
        .then((data) => {
            succes(response,data,202);
        }).catch((err) => {
            error(response,err,503);
        });
});

routerAccount.put('/abonoCuenta/:id?',(request,response) => {
    accountDao.sendRequest(`UPDATE Cuenta SET saldo = ${request.body.saldo} WHERE numero = ${request.query.id};`)
        .then((data) => {
            succes(response,data,202);
        }).catch((err) => {
            error(response,err,503);
        });
});

routerAccount.put('/MontoDiarioAum/:id/:value',getAccount,accountMiddleWare,(request,response)=>{
    accountDao.update('Cuenta',request.body,parseString(request.params['id']))
    .then((data) => {
        succes(response,data,202);
    }).catch((err) => {
        error(response,err,503);
    });
});

module.exports = routerAccount;

