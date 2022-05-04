const Location = require ('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

Trip.hasMany(Traveller)
Traveller.belongsTo(Trip, {
    foreignKey: "traveller.id",
    onDelete: "CASCADE"
})

Trip.hasMany(Location)
Location.belongsTo(Trip, {
    foreignKey: "traveller.id",
    onDelete: "CASCADE"
})