const Message = require('../models/message')

module.exports = {
    async load(req, res) {
        res.json(await Message.find());
    },

    async send(req, res) {
        try {
            let message = new Message(req.body);
            message = await message.save();
            res.json({ _id: message._id, status: true });
        } catch (exception) {
            res.json({ status: 0 });
            console.log(`Ошибка отправки: ${ exception }`);
        }
    }
};