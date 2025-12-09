const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Enrollment = sequelize.define('enrollment', {
    // Sequelize creează automat id
});

module.exports = Enrollment;