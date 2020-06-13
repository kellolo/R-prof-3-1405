const express = require('express');
const mongo = require('mongoose');

// const Message = require('./db/models/message.js');
const MsgController = require('./db/controllers/message_controller.js');
const ChatsController = require('./db/controllers/chats_controllers.js');


const app = express();
app.use(express.json());

mongo.connect('mongodb://localhost/geekapp-v1', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => { console.log('DB connected') })
.catch(() => { console.log('DB offline')});

app.listen(3300, () => {
  console.log('listening @port 3300...');
});

// const fs = require('fs'); 

app.get('/messages/:id', MsgController.load);
app.post('/messages', MsgController.send);

app.get('/chats', ChatsController.load);
app.post('/chats', ChatsController.create);
app.delete('/chats/:id', ChatsController.delete);

// СООБЩЕНИЯ mongo

// app.post('/messages', async (req, res) => {
//   let message = new Message(req.body);
//   message = await message.save();
//   console.log(message);
//   res.json({status: 1});
// });

// app.get('/messages', async (req, res) => {
//   res.json(await Message.find());
// });



// СООБЩЕНИЯ json

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
//         sender: req.body.sender,
//         text: req.body.text
//       };
//       fs.writeFile('./server/db/json/messages.json', JSON.stringify(messages, null, ' '), err => {
//         if (!err) {
//           res.json({status: 1})
//         }
//       });
//     }
//   });
// })

// ЧАТЫ (json)

// app.get('/chats', (req, res) => {
//   fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
//     if (!err) {
//       let d = JSON.parse(data);
//       res.json(d);
//     }
//   });
// });

// app.post('/chats', (req, res) => {
//   fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
//     if (!err) {
//       let chats = JSON.parse(data);
//       chats[req.body.chatId] = {
//         title: req.body.title,
//         messagesList: []
//       };
//       fs.writeFile('./server/db/json/chats.json', JSON.stringify(chats, null, ' '), err => {
//         if (!err) {
//           res.json({status: 1})
//         }
//       });
//     }
//   });
// });

// app.delete('/chats', (req, res) => {
//   fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
//     if (!err) {
//       let chats = JSON.parse(data);
//       delete chats[req.body.chatId]
//       fs.writeFile('./server/db/json/chats.json', JSON.stringify(chats, null, ' '), err => {
//         if (!err) {
//           res.json({status: 1})
//         }
//       });
//     }
//   });
// });


