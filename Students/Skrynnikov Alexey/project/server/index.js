const express = require('express');
const mongo = require('mongoose');

const MsgController = require('./db/controllers/message_controller');
const ChatsController = require('./db/controllers/chats_controller');

const app = express();
app.use(express.json()); 

mongo.connect('mongodb://localhost/geekapp-v1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => { console.log('DB connected!') })
.catch(() => { console.log('DB offline!') })

app.listen(3300, () => {
    console.log('listening @ port 3300....');
});

app.get('/messages/:id', MsgController.load);
app.post('/messages', MsgController.send);

app.get('/chats', ChatsController.load);
app.post('/chats', ChatsController.create);

// app.get('/messages', (req, res) => {
//     fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
//         if(!err) {
//             let d = JSON.parse(data);
//             res.json(d)
//         }
//     })
// });

// app.post('/messages', (req, res) => {
//     fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
//         if(!err) {
//             let messages = JSON.parse(data);
//             messages[req.body.messageId] = {
//                 user: req.body.sender,
//                 text: req.body.text
//             };
//             fs.writeFile('./server/db/messages.json', JSON.stringify(messages, null, ''), err => {
//                 if(!err) {
//                     res.json({ status: 1 })
//                 }
//             })
//         }
//     });
// });

// app.get('/chats', (req, res) => {
//     fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
//         if(!err) {
//             let d = JSON.parse(data);
//             res.json(d)
//         }
//     })
// });

// app.post('/chats', (req, res) => {
//     fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
//         if(!err) {
//             let chats = JSON.parse(data);
//             let chatID = Object.keys(chats).length + 1;
//             chats[req.body.chatID] = {
//                 title: req.body.title,
//             };
//             fs.writeFile('./server/db/json/chats.json', JSON.stringify(chats, null, ''), err => {
//                 if(!err) {
//                     res.json({ status: 1 })
//                 }
//             })
//         }
//     });
// });
