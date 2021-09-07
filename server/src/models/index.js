const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

const sequelize = new Sequelize(
  config.db.databaseName,
  config.db.username,
  config.db.password,
  config.db.options
);

sequelize.authenticate()
  .then(() => {
    console.log(`Connected to database ${config.db.databaseName}`);
  })
  .catch(err => console.log(err));

fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
