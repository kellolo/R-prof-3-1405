const mongo = require('mongoose');
const Schema = mongo.Schema;

const chatSchema = new Schema({
    title: { type: String, required: true },
    messages: { type: Array, default: [] },
    deleted: {type: Boolean, default: false}
});

module.exports = mongo.model('chat', chatSchema); 