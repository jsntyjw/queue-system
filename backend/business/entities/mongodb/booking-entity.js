'use strict';

const BaseEntityMongoDb = require('../../../core/base-entity-mongodb');
const model = require('../../../helpers/constants').MONGODB.INSTANCES.BOOKING;
const schema = require('../../../domains/mongodb/schemas').SCHEMAS.BOOKING;

class BookingEntity extends BaseEntityMongoDb {

    constructor() {
        super(model, schema);
    }

    list() {
        return this._model.find({}).sort([['_id', -1]]);

    }

    findById(id) {
        return this._model.findById(id);
    }

    findByLocation(location){
        return this._model.find({serviceProviderLocation : location}).sort([['_id', -1]]);
    }

    findByNric(citizenNric){
        return this._model.find({nric : citizenNric}).sort([['_id', -1]]);
    }

    add(data) {
        let newObj = new this._model(data);
        return newObj.save();
    }

    remove(id) {
        return this._model.remove({ _id: id });
    }

    update(id, fieldObj) {
        return this._model.findByIdAndUpdate(id, {
            '$set': fieldObj
        }, { upsert: true });
    }

}

module.exports = BookingEntity;
