//Metodos para determinar valores de consultas a la base de datos

function getIdDB(table) {
    switch (table) {
        default:
            return 'id';
    }
}

function getValueText(list) {
    let values = 'VALUES(';
    for (let i = 0; i < list.length; i++) {
        if (i === (list.length - 1)) {
            values += `${list[i]});`
        } else {
            values += `${list[i]},`
        }
    }

    return values;
}

function getUpdateText(body) {
    let update = '';
    for (let clave in body) {
        if (body.hasOwnProperty(clave)) {
            update += `${clave} = ${body[clave]},`;
        }
    }
    return update.substring(0, update.length - 1);

}

module.exports = {
    getIdDB,
    getValueText,
    getUpdateText,
}