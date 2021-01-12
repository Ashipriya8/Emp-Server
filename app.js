const express = require('express');
const cors = require('cors');
var morgan = require('morgan');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

var home = require('./api/home');
var addEmp = require('./api/routes/addemp');


app.use('/', home);
app.use('/api/addemp', addEmp);

app.listen(port, () => {
    console.log('Server is listening on port', +port)
})