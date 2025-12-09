const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

const Employee = sequelize.define("Employee", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 10]   
        }
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0
        }
    }
});

module.exports = Employee;
