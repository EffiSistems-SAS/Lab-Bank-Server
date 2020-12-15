const express = require('express');

const PORT = process.env.PORT || 4000;
const app = express();

app.get('/',(request,response) => {
    response.send('<h1>Servidor del banco para atms</h1>');
});

app.listen(PORT,() => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});