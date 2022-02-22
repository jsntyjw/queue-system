"use strict";

const BaseCore = require("../../../core/base-core");
const BookingEntity = require("../../entities/mongodb/booking-entity"); 


class BookingComponent extends BaseCore {
    constructor() {
        super();

        this._bookingEntity = new BookingEntity;
    }

    async getListBooking() {

        let bookings = await this._bookingEntity.list();
        return bookings;
    }

    async getListBookingByLocation(location){
        let bookings = await this._bookingEntity.findByLocation(location);
        return bookings;
    }

    async getListBookingByNric(citizenNric){
        let bookings = await this._bookingEntity.findByNric(citizenNric);
        return bookings;
    }


    async getDetailBooking(id) {
        if (!id) {
            throw {
                message: "Invalid input"
            }
        }

        let booking = await this._bookingEntity.findById(id);
        return booking;
    }

    async updateBooking(id, booking) {
        if (!booking) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._bookingEntity.update(id, booking);

        if (!result) {
            throw {
                message: "An occurs err"
            }
        }

        return result;
    }
    async addBooking(booking) {
        if (!booking) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._bookingEntity.add(booking);

        if (!result) {
            throw {
                message: "An occurs err"
            }
        }

        return result;
    }
    async delBooking(id) {
        if (!id) {
            throw {
                message: "Invalid input"
            }
        }

        let booking = await this._bookingEntity.findById(id);

        if (!booking) {
            throw {
                message: "Booking does not exist"
            }

        }

        await this._bookingEntity.remove(id);
        return true;
    }

}

module.exports = BookingComponent;
