"use strict";
const axios = require("axios");

const BaseController = require("../../core/base-controller");


class BookingController extends BaseController {
    


    constructor() {
        super();

        this.list = this.list.bind(this);
        this.detail = this.detail.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.del = this.del.bind(this);
        this.locationFiltering = this.locationFiltering.bind(this)
    }


    async list(req, res) {

        try {
            let data = await this._facade.getListBooking();
            return this._handleResult(data, res);

        } catch (error) {
            res.render('err/occurs-error', {
                layout: false,
                err: error
            });
        }

    }

    async detail(req, res) {
        try {
            let id = req.params.id.trim();
            let data = await this._facade.getDetailBooking(id);

            return this._handleResult(data, res);


        } catch (error) {
            this._handleError(error.message, res);
        }
    }

    async locationFiltering(req, res) {
        try {
            let location = req.params.serviceProviderLocation;
            let data = await this._facade.getListBookingByLocation(location);

            return this._handleResult(data, res);


        } catch (error) {
            this._handleError(error.message, res);
        }

        // try {
        //     let data = await this._facade.getListBookingByLocation();
        //     return this._handleResult(data, res);

        // } catch (error) {
        //     res.render('err/occurs-error', {
        //         layout: false,
        //         err: error
        //     });
        // }
    }

    async create(req, res) {
        try {
            if (this._handleValidationResult(req, res)) {
                return false;
            }

            let booking = {
                nric: req.body.Nric,
                citizenName: req.body.CitizenName,
                citizenSalutation: req.body.CitizenSalutation,
                citizenEmail: req.body.CitizenEmail,
                citizenNumber: Number(req.body.CitizenNumber),

                serviceName : req.body.ServiceName,
                serviceProviderEmail : req.body.ServiceProviderEmail,
                serviceProviderName : req.body.ServiceProviderName,
                serviceProviderPhone: Number(req.body.ServiceProviderPhone),
                serviceStartDate: req.body.ServiceStartDate,
                serviceStartTime: req.body.ServiceStartTime,

                serviceProviderLocation: req.body.ServiceProviderLocation,
                // serviceEndDateTime: req.body.ServiceEndDateTime,

                // bookingCreationDate: req.body.BookingCreationDate,
                // bookingLocation: req.body.BookingLocation,
                // bookingDescription: req.body.BookingDescription,
                // bookingReference: req.body.BookingReference,
                bookingStatus: req.body.BookingStatus,

                // dynamicFields: req.body.DynamicFields,
                
            };
 
            let data = await this._facade.addBooking(booking);

            this._handleResult(data, res);
        } catch (error) {
            console.log(error);
            this._handleError({
                code: 500,
                message: error.message
            }, res);
        }
    }

    async update(req, res) {
        try {
            if (this._handleValidationResult(req, res)) {
                return false;
            }
            console.log(req.body.Id);


            let booking = {
                id: req.body.Id,
                nric: req.body.Nric,
                citizenName: req.body.CitizenName,
                citizenSalutation: req.body.CitizenSalutation,
                citizenEmail: req.body.CitizenEmail,
                citizenNumber: Number(req.body.CitizenNumber),
                serviceName : req.body.ServiceName,
                serviceProviderEmail : req.body.ServiceProviderEmail,
                serviceProviderName : req.body.ServiceProviderName,
                serviceProviderPhone: Number(req.body.ServiceProviderPhone),
                serviceStartDate: req.body.ServiceStartDate,
                serviceStartTime: req.body.ServiceStartTime,

                serviceProviderLocation: req.body.ServiceProviderLocation,
                // serviceEndDateTime: req.body.ServiceEndDateTime,
                // bookingCreationDate: req.body.BookingCreationDate,
                // bookingLocation: req.body.BookingLocation,
                // bookingDescription: req.body.BookingDescription,
                // bookingReference: req.body.BookingReference,
                bookingStatus: req.body.BookingStatus,
                // dynamicFields: req.body.DynamicFields,
            };

            let data = await this._facade.updateBooking(booking.id, booking);

            this._handleResult(data, res);
        } catch (error) {
            this._handleError(error.message, res);
        }
    }

    async del(req, res) {
        const id = req.body.id;
        console.log(id);
        try {

            const Booking = await this._facade.getDetailBooking(id);

            if (!Booking) {
                return this._handleError('Booking does not exist', res);
            }

            let data = await this._facade.delBooking(id);
            this._handleResult(data, res);
        } catch (error) {
            this._handleError(error.message, res);
        }

    }

}

module.exports = BookingController;