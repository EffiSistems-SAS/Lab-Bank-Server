const mysql = require('mysql');
const keys = require('../private/keys');
const { promisify } = require('util');

console.log(keys);
const pool = mysql.createPool(keys);

pool.getConnection((error,connection) => {

    if(connection){
        connection.release();
        return
    }else{
        console.log(error);
        throw new Error(error);
    }

});

pool.query = promisify(pool.query);

module.exports = pool;