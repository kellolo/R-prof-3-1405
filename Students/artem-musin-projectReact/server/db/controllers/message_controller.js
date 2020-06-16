const Message = require('../models/messages.js');

module.exports = {
    async load (req, res) {
        let messages = await Message.find();
        messages = messages.filter(m => m.chatId == req.params.id)
        res.json(messages);
    },
    async send (req, res) {
        try {
            const { chatId, sender, text } = req.body;
            const newMsg = await Message.create({
                chatId, sender, text
            });
            res.json({ _id: newMsg._id, status: true });
        }
        catch {
            res.json({ status: false }); 
        }
    }
};