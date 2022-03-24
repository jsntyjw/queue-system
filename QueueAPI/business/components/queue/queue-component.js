"use strict";

const BaseCore = require("../../../core/base-core");
const QueueEntity = require("../../entities/mongodb/queue-entity"); 


class QueueComponent extends BaseCore {
    constructor() {
        super();

        this._queueEntity = new QueueEntity;
    }

    async getListQueue() {

        let queues = await this._queueEntity.list();
        return queues;
    }

    async getListQueueByAppointmentId(apptId){
        let queues = await this._queueEntity.getListQueueByAppointmentId(apptId);
        return queues;
    }

    async getDetailQueue(id) {
        if (!id) {
            throw {
                message: "Invalid input"
            }
        }

        let queue = await this._queueEntity.findById(id);
        return queue;
    }

    async updateQueue(id, queue) {
        if (!queue) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._queueEntity.update(id, queue);

        if (!result) {
            throw {
                message: "An occurs err"
            }
        }

        return result;
    }
    async addQueue(queue) {
        if (!queue) {
            throw {
                message: "Invalid input"
            }
        }

        let result = await this._queueEntity.add(queue);

        if (!result) {
            throw {
                message: "An occurs err"
            }
        }

        return result;
    }
 

}

module.exports = QueueComponent;
