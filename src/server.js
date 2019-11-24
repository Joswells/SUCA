const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

mongoose.connect("mongodb+srv://jr:reactnative@cluster0-jdcmj.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true });

server.use(cors());
server.use(express.json());
server.use(routes);

var porta = process.env.PORT || 8080;
app.listen(porta);

server.listen(porta);

