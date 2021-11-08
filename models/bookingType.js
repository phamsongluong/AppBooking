const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const BookingType = sequelize.define('bookingType', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    maxCapacity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    slotBooked: {
        type: Sequelize.INTEGER
    },
    created_by: {
        type: Sequelize.INTEGER
    }
});

module.exports = BookingType;