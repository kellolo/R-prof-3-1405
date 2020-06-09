const mongo = require('mongoose');
const { Schema } = mongo;

const messageSchema = new Schema({
  sender: {},
  text: {type: String, required: true}
})

module.exports = mongo.model('message', messageSchema);