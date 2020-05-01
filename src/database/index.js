const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Feed = require("../models/Feed");

const config =
  process.env.NODE_ENV == "test" ? dbConfig.test : dbConfig.development;

const connection = new Sequelize(config);

Feed.init(connection);

Feed.associate(connection.models);

module.exports = connection;
