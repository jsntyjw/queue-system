"use strict";
const axios = require("axios");

const BaseController = require("../../core/base-controller");


class QueueController extends BaseController {
    


    constructor() {
        super();

        this.list = this.list.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.appointmentIdFiltering = this.appointmentIdFiltering.bind(this);
        this.todayQueueFiltering = this.todayQueueFiltering.bind(this);
    }


    async list(req, res) {

        try {
            let data = await this._facade.getListQueue();
            return this._handleResult(data, res);

        } catch (error) {
            res.render('err/occurs-error', {
                layout: false,
                err: error
            });
        }

    }

    

    async create(req, res) {
        try {
            if (this._handleValidationResult(req, res)) {
                return false;
            }

            let queue = {
                queueNumber: req.body.QueueNumber,
                appointmentId: req.body.AppointmentId,
                currentService: req.body.CurrentService,
                queueDate: req.body.QueueDate,
                missedQueue: req.body.MissedQueue
            };
 
            let data = await this._facade.addQueue(queue);

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


            let queue = {
                id: req.body.Id,
                queueNumber: req.body.QueueNumber,
                appointmentId: req.body.AppointmentId,
                currentService: req.body.CurrentService,
                queueDate: req.body.QueueDate,
                missedQueue: req.body.MissedQueue

            };

            let data = await this._facade.updateQueue(queue.id, queue);

            this._handleResult(data, res);
        } catch (error) {
            this._handleError(error.message, res);
        }
    }


    async appointmentIdFiltering(req, res) {
        try {
            let apptId = req.params.appointmentId;
            let data = await this._facade.getListQueueByAppointmentId(apptId);

            return this._handleResult(data, res);


        } catch (error) {
            this._handleError(error.message, res);
        }

    }


    async todayQueueFiltering(req, res) {
        try {
            let todayDate = req.params.todayDate;
            let data = await this._facade.getListQueueByDate(todayDate);

            return this._handleResult(data, res);


        } catch (error) {
            this._handleError(error.message, res);
        }

    }

   

}

module.exports = QueueController;