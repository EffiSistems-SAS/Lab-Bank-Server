
const createDataMiddleware = (req,res,next) => {
    let values = [];
    for (let clave in req.body) {
        if (req.body.hasOwnProperty(clave)) {
            values.push(req.body[clave]);
        }
    }
    req.values = values;
    next();

}


module.exports = {
    createDataMiddleware
}