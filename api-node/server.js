const expres = require('express');
const http = require('http');
const debug = require('debug')('apinode:server');

const app = express();
const port = 3000;

app.set('port',port);

const server = http.createServer(app);
const router = expres.Router();

const route = router.get('/',(req,res,next)=>{
    res.status(200).send({
        title:'Node Api',
        version: '0.0.1'
    });
})

app.use('/',route)