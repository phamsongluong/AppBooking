const Sequelize = require("sequelize");

const sequelize = new Sequelize('Booking', 'root', '123456789', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;