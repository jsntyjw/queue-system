'use strict';

const BaseCore = require('../../core/base-core');
const QueueComponent = require('../components/queue/queue-component'); 

class Facade extends BaseCore {

    constructor() {
        super();
        this._queueComponent = new QueueComponent; 
    }

    // queue
    async updateQueue(id, queue) {
        return this._queueComponent.updateQueue(id, queue);
    }
    async addQueue(queue) {
        return this._queueComponent.addQueue(queue);
    }

    async getDetailQueue(id) {
        return this._queueComponent.getDetailQueue(id);
    }
    async getListQueue() {
        return this._queueComponent.getListQueue();
    }

    async getListQueueByAppointmentId(apptId) {
        return this._queueComponent.getListQueueByAppointmentId(apptId);
    }


     async getListQueueByDate(todayDate) {
        return this._queueComponent.getListQueueByDate(todayDate);
    }
    



}

module.exports = Facade;
