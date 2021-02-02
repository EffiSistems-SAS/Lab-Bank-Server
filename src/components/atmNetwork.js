const express = require('express');
const routerAtm = express.Router();
const Dao = require('../common/Dao');
const { parseString } = require('../common/proccesData');
const { succes , error } = require('../common/response');

let atmDao = new Dao();

routerAtm.put('/edit/:id?',(request,response) => {
    atmDao.update('Atm',request.body,parseString(request.query.id))
    .then((data)=>{
        succes(response,data,200);
    }).catch((err)=>{
        error(response,'',404);
    });
});

module.exports = routerAtm;