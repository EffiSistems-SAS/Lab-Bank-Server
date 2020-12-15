const mysql = require('mysql');
const keys = require('../private/keys');
const { promisify } = require('util');

const pool = mysql.createPool(keys);

pool.getConnection((error,connection) => {

    if(connection){
        console.log('Conexión realizada');
        connection.release();
        return
    }else{
        throw new Error(error);
    }

});

pool.query = promisify(pool.query);

module.exports = pool;