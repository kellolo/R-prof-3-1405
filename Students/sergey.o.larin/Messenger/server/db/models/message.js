const mongo = require('mongoose');
const { Schema } = mongo;

const messagesSchema = new Schema({
    id: { type: Number, required: true },
    messageId: { type: Number, required: true},
    sender: { type: String, required: true },
    text: { type: String, required: true },
});

module.exports = mongo.model('messages', messagesSchema)