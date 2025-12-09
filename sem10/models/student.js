const sequelize = require('../sequelize');
const { DataTypes } = require('sequelize');

const Student = sequelize.define('student', {
    studentFullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    studentStatus: {
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'FREEZED'),
        allowNull: false
    }
});

module.exports = Student;