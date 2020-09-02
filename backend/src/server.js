const express = require('express');
const routes = require('./routes')
const mongo = require('./database/db')


const app = express();

app.use(express.json());
app.use(routes);



app.listen(3333);