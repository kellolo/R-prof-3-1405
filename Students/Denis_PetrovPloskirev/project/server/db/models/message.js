const mongo = require('mongoose');
const { Schema } = mongo;

const messageSchema = new Schema({
  sender: {},
  text: {type: String, required: true},
  chatId: {type: String, required: true, default: 'qwe'}
})

module.exports = mongo.model('message', messageSchema);