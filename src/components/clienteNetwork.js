const express = require('express');
const routerClient = express.Router();
const Dao = require('../common/Dao');
const { succes , error } = require('../common/response');

let clientDao = new Dao();

routerClient.get('/view/:id?',(request,response) => {
    clientDao.get('Cliente',request.query.id)
        .then((res) => {
            if(res.length === 1){
                succes(response,data,200);
            }else{
                error(response,'',404);
            }
        })
        .catch((e) => {
            console.log(e);
            error(response,e,500);
        });
});


module.exports = routerClient;