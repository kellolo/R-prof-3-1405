const mongo = require('mongoose');
const { Schema } = mongo;

const contactsSchema = new Schema({
    contact: { type:String, require: true},
})

module.exports = mongo.model('contacts', contactsSchema)