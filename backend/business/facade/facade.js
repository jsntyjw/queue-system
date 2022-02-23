'use strict';

const BaseCore = require('../../core/base-core');
const BookingComponent = require('../components/booking/booking-component'); 

class Facade extends BaseCore {

    constructor() {
        super();
        this._bookingComponent = new BookingComponent; 
    }

    // booking
    async updateBooking(id, booking) {
        return this._bookingComponent.updateBooking(id, booking);
    }
    async addBooking(booking) {
        return this._bookingComponent.addBooking(booking);
    }

    async delBooking(id) {
        return this._bookingComponent.delBooking(id);
    }

    async getDetailBooking(id) {
        return this._bookingComponent.getDetailBooking(id);
    }
    async getListBooking() {
        return this._bookingComponent.getListBooking();
    }
    async getListBookingByLocation(location) {
        return this._bookingComponent.getListBookingByLocation(location);
    }
    async getListBookingByNric(citizenNric) {
        return this._bookingComponent.getListBookingByNric(citizenNric);
    }

}

module.exports = Facade;
