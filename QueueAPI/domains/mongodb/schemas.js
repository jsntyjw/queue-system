'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QUEUE = new Schema({
    queueNumber : String,
    appointmentId : String,
    queueDate: String,
    currentService : String,
    missedQueue: Boolean


}).pre('save', (next) => {
    console.log('SAVE QUEUE');
    next();
});



exports.SCHEMAS = {
    QUEUE: QUEUE
};
