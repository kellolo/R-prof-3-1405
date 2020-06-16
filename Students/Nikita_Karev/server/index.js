const express = require('express');
const mongo = require('mongoose');

const MsgController = require('./db/controllers/message_controller.js');
const ChatsController = require('./db/controllers/chats_controller.js');
// const Message = require('./db/models/message');

const app = express();
app.use(express.json());

mongo.connect('mongodb://localhost/geekapp-v1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => { console.log('DB connected!') })
.catch(() => { console.log('DB offline!') })

// app.post('/messages', async (req, res) => {
//     let message = new Message(req.body);
//     message = await message.save();
//     res.json({ status: 1 })
// });

// app.get('/messages', async (req, res) => {
//     res.json(await Message.find());
// });

// const fs = require('fs');

// app.get('/messages', (req, res) => {
//   fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
//     if (!err) {
//       let d = JSON.parse(data);
//       res.json(d);
//     }
//   });
// });

// app.post('/messages', (req, res) => {
//   fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
//     if (!err) {
//       let messages = JSON.parse(data);
//       messages[req.body.messageId] = {
//         user: req.body.sender,
//         text: req.body.text,
//       };
//       fs.writeFile('./server/db/json/messages.json', JSON.stringify(messages, null, ' '), err => {
//         if (!err) res.json({ status: 1});
//       });
//     }
//   });
// });

app.listen(3300, () => {
    console.log('listening @ port 3300...');
});

app.get('/messages/:id', MsgController.load);
app.post('/messages', MsgController.send);

app.get('/chats', ChatsController.load);
app.post('/chats', ChatsController.create);

