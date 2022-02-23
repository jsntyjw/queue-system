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
    serviceStartDate : String,
    serviceStartTime : String,

    serviceProviderLocation : String,
    bookingStatus : String,
    

}).pre('save', (next) => {
    console.log('SAVE BOOKING');
    next();
});

exports.SCHEMAS = {
    BOOKING: BOOKING
};
