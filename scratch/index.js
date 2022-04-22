const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express()
const port = 3000
//const creds = require('./credentials')
//const db = require('./query')

const {exp_config} = require('./config')
const db = require('./query')



const { application } = require('express')
app.use(cors());
app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});


//app.get('/creds')

//app.get('/users', db.getUsers)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})