const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();


const routing = require('./routing');
const port = 3000;

//const router = express.Router();

/*router.get('/',function(req,res){
    res.sendFile(process.cwd() + '/index.html');
});*/

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

const db = require('./db');

const { application } = require('express')
app.use(cors());
app.use(bodyParser.json());
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/sptl', express.static(__dirname + '/sptl'));

app.use(
  bodyParser.urlencoded({
    extended: true, 
  })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/data/v1/addresses', routing.getAddresses);

//app.use('/', router);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})
