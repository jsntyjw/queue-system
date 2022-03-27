'use strict';

const BaseEntityMongoDb = require('../../../core/base-entity-mongodb');
const model = require('../../../helpers/constants').MONGODB.INSTANCES.QUEUE;
const schema = require('../../../domains/mongodb/schemas').SCHEMAS.QUEUE;

class QueueEntity extends BaseEntityMongoDb {

    constructor() {
        super(model, schema);
    }

    list() {
        return this._model.find({}).sort([['_id', -1]]);

    }

    findById(id) {
        return this._model.findById(id);
    }


    add(data) {
        let newObj = new this._model(data);
        return newObj.save();
    }


    getListQueueByAppointmentId(appointmentIdInput){
        return this._model.find({appointmentId : appointmentIdInput}).sort([['_id', -1]]);
    }


    getListQueueByDate(todayDateInput){
        return this._model.find({queueDate : todayDateInput}).sort([['_id', -1]]);
    }



    update(id, fieldObj) {
        return this._model.findByIdAndUpdate(id, {
            '$set': fieldObj
        }, { upsert: true });
    }

}

module.exports = QueueEntity;
