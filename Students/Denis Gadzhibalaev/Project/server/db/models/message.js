const mongo = require('mongoose');
const { Schema } = mongo;

const messageSchema = new Schema({
    sender: { type: String, required: true },
    text: { type: String, required: true },
    chatId: { type: String, required: true },
    deleted: { type: Boolean, required: true, default: false }
});

module.exports = mongo.model('message', messageSchema);