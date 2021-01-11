const express = require('express');
const config = require('./modules/config');

const PORT = process.env.PORT || 4000;
const app = express();

app.get('/',(request,response) => {
    response.send('<h1>Servidor del banco para atms</h1>');
});

config(app);

app.listen(PORT,() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});