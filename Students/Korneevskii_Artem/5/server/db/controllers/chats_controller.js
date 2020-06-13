const Chat = require('../models/chat.js');

module.exports = {
    async create(req, res) {
        try {
            const { title } = req.body;
            const newChat = await Chat.create({
                title
            });
            res.json({ _id: newChat._id, status: true });
        }
        catch(err) {
            res.json({ status: false });
        }
    },

    async load(req, res) {
        res.json(await Chat.find());
    }
}