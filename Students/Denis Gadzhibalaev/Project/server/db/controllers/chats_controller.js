const Chats = require('../models/chats.js');

module.exports = {
    async create (req, res) {
        try {
            const { title } = req.body;
            const newChat = await Chats.create({
                title
            });
            res.json({ _id: newChat._id, status: true });
        }
        catch {
            res.json({ status: false });
        }
    },

    async load(req, res) {
        let chats = await Chats.find();
        newChats = {}
            Object.keys(chats).forEach(c => {
                newChats[chats[c]._id] = chats[c]
            });
        res.json(newChats);
    },
    async delete (req, res) {
        try {
            await Chats.updateOne( 
                { _id: req.body.chatId }, 
                { 
                    $set : { deleted: true },
                    $currentDate: { "lastModified": true } 
                }); 
            res.json({ status: true });
        }
        catch {
            res.json({ status: false }); 
        }
    },
}