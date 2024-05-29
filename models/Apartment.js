// server/models/Apartment.js
const mongoose = require('mongoose');

const apartmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    roomCount: { type: Number, required: true },
    floor: { type: Number, required: true },
    parkingSpace: { type: Boolean, required: true },
    balcony: { type: Boolean, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
});

module.exports = mongoose.model('Apartment', apartmentSchema);
