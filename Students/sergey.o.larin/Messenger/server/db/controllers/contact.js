const Contact = require('../models/contact')

module.exports = {
    async create(req, res) {
        try {
            const { name } = req.body;
            const newContact = await Contact.create({ name });
            res.json({ _id: newContact, status: true })
        } catch (exception) {
            res.json({ status: false })
        }
    },

    async load(req, res) {

    },
}
