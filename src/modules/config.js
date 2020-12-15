const bodyParser = require('body-parser');
const router = require('./routes');

const config = (app) => {

    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());

    if(process.env.NODE_ENV === 'development'){
        app.use((req,res,next) => {
            res.setHeader('Access-Control-Allow-Origin','*');
            res.setHeader('Access-Control-Allow-Headers','Origin,X-Request-With,Content-Type,Accept');
            res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
            next();
        });
    }

    router(app);
}

module.exports = config;