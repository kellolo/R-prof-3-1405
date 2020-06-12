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
    catch {
      res.json({ status: false });
    }
  },

  async load(req, res) {
    res.json(await Chat.find());
  },

  async delete(req, res) {
    Chat.findByIdAndRemove(req.params.id, { useFindAndModify: false }, function(err, data) {
      if (!err) {
        res.json({status: true})
      }
    })
  }
}