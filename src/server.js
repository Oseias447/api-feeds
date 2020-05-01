const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { errors } = require("celebrate");

const server = require("express")();

// Conecta no Banco de Dados
require("./database");

server.use(cors());
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));

// Inicia as rotas da API
server.use(require("./controllers/FeedController"));

server.use(errors());
server.listen(3333);

module.exports = server;
