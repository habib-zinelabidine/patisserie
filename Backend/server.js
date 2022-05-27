require('dotenv').config();
const bodyparser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const userRouting = require('./routes/userRouting');
const app = express();


const Port = process.env.Port || 4000 ;
app.use(cors())
app.use(morgan('dev'));
app.use(bodyparser.json());

app.use(userRouting);





mongoose.connect(process.env.DB_Connect)
.then(() =>{console.log('Connected To MongoDB')})
.catch(error=>{console.log(error.message)});




app.listen(Port,console.log(`Server is runnig at http://localhost:${Port}`));