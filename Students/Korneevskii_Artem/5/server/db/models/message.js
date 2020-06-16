const mongo = require('mongoose');
const { Schema } = mongo;

const messageSchema = new Schema({
    sender: { type: String, required: true },
    text: { type: String, required: true },
    chatId: { type: String, required: true, default: '111' }    
});

module.exports = mongo.model('message', messageSchema);