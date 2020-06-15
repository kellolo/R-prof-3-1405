const Message = require('../models/message.js');

module.exports = {
    async load (req, res) {
        let msgs = await Message.find();
            newMsgs = {}
            Object.keys(msgs).forEach(m => {
                if (msgs[m].chatId == req.params.id) {
                    newMsgs[msgs[m]._id] = msgs[m]
                }
            });
        res.json(newMsgs);
    },
    async send (req, res) {
        try {
            const { sender, text, chatId } = req.body;
            const newMsg = await Message.create({
                sender, text, chatId
            });
            res.json({ _id: newMsg._id, status: true });
        }
        catch {
            res.json({ status: false }); 
        }
    },
    async delete (req, res) {
        try {
            await Message.updateOne( 
                { _id: req.body.messageId }, 
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
    async put (req, res) {
        try {
            await Message.updateMany( 
                { sender: req.body.lastName }, 
                { 
                    $set : { sender: req.body.name },
                    $currentDate: { "lastModified": true } 
                }); 
            res.json({ status: true });
        }
        catch {
            res.json({ status: false }); 
        }
    }
};