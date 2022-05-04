const {Model, DataTypes} = require('sequelize');
const sequelize = require ('../config/connection');

class Trip extends Model {}

Trip.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    trip_budget: {
        type:DataTypes.DECIMAL,
        allowNull: true,
        validate: {
            isDecimal: true
        }
    },
    traveller_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isNumeric: true,
        }
        
    }
})