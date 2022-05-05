const Location = require ('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

// Trip.hasMany(Traveller)
// Traveller.belongsTo(Trip, {
//     foreignKey: "traveller.id",
//     onDelete: "CASCADE"
// })

// Trip.hasMany(Location)
// Location.belongsTo(Trip, {
//     foreignKey: "traveller.id",
//     onDelete: "CASCADE"
// })

Traveller.belongsToMany(Location, {
    //define the third table needed to store the foreign key
    through: {
        model: Trip,
        unique: false
    },
    as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
    //define the third table needed to store the foreign key
    through: {
        model: Trip,
        unique: false
    },
    as: 'location_travellers'
});

module.exports = {Traveller, Location, Trip};