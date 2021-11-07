const { findLastKey } = require('lodash');
const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Booking = sequelize.define('booking', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING,
    },
    created_by: {
        type: Sequelize.INTEGER
    }
});

module.exports = Booking;