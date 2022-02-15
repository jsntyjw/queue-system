'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BOOKING = new Schema({
    nric : String,
    citizenName : String,
    citizenSalutation : String,
    citizenEmail : String,
    citizenNumber : Number,
    serviceName : String,
    serviceProviderName : String,
    serviceProviderEmail : String,
    serviceProviderPhone : Number,
    serviceStartDateTime : String,
    serviceEndDateTime : String,
    bookingCreationDate : String,
    bookingLocation : String,
    bookingDescription : String,
    bookingReference : String,
    bookingStatus : String,
    dynamicFields : String,
    

}).pre('save', (next) => {
    console.log('SAVE BOOKING');
    next();
});

exports.SCHEMAS = {
    // ACCOUNT: ACCOUNT,
    BOOKING: BOOKING
};
