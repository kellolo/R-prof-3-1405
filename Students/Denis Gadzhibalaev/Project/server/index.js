const express = require('express');
const mongo = require('mongoose');

const MsgController = require('./db/controllers/message_controller');
const ChatsController = require('./db/controllers/chats_controller');

const fs = require('fs');
const app = express();
app.use(express.json());

mongo.connect('mongodb://localhost/geekapp-v1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => { console.log('DB connected!') })
.catch(() => { console.log('DB offline!') });

app.get('/messages/:id', MsgController.load);
app.post('/messages', MsgController.send);
app.delete('/messages', MsgController.delete,);
app.put('/messages', MsgController.put,);

app.get('/chats', ChatsController.load);
app.post('/chats', ChatsController.create);
app.delete('/chats', ChatsController.delete);

app.get('/profile', (req, res) => {
    fs.readFile('./server/db/json/userProfile.json', 'utf-8', (err, data) => {
        if (!err) {
            let d = JSON.parse(data);
            res.json(d);
        }
    });
});

app.put('/profile', (req, res) => {
        fs.readFile('./server/db/json/userProfile.json', 'utf-8', (err, data) => {
            if (!err) {
                let d = JSON.parse(data);
                console.log(d)
                if (req.body.name) {
                    d.userName = req.body.name
                }
                if (req.body.email) {
                    d.userEmail = req.body.email
                }
                fs.writeFile('./server/db/json/userProfile.json', JSON.stringify(d, null, ' '), err => {
                    if (!err) {
                        res.json({ status: true })
                    }
                })
            }
        });
    });

app.listen(3300, () => {
    console.log('listening @ port 3300....');
});
// JSON
// app.get('/messages/:id', (req, res) => {
//     fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
//         if (!err) {
//             let d = JSON.parse(data);
//             newData = {}
//             Object.keys(d).forEach(m => {
//                 if (d[m].chatId == req.params.id) {
//                     newData[m] = d[m]
//                 }
//             })
//             res.json(newData);
//         }
//     });
// });

// app.get('/chats/', (req, res) => {
//     fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
//         if (!err) {
//             let d = JSON.parse(data);
//             res.json(d);
//         }
//     });
// });

// app.post('/messages', (req, res) => {
//     fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
//         if (!err) {
//             let messages = JSON.parse(data);

//             messages[req.body.messageId] = {
//                 user: req.body.sender,
//                 text: req.body.text,
//                 deleted: false,
//                 chatId: req.body.chatId 
//             };

//             fs.writeFile('./server/db/json/messages.json', JSON.stringify(messages, null, ' '), err => {
//                 if (!err) {
//                     res.json({ status: 1 })
//                 }
//             })
//         }
//     });
// });

// app.post('/chats', (req, res) => {
//     fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
//         if (!err) {
//             let chats = JSON.parse(data);

//             chats[req.body.chatId] = {
//                 title: req.body.title,
//                 deleted: false,
//                 messagesList: []
                
//             };

//             fs.writeFile('./server/db/json/chats.json', JSON.stringify(chats, null, ' '), err => {
//                 if (!err) {
//                     res.json({ status: 1 })
//                 }
//             })
//         }
//     });
// });

// app.delete('/messages', (req, res) => {
//     fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
//         if (!err) {
//             let messages = JSON.parse(data);

//             messages[req.body.messageId].deleted = true;

//             fs.writeFile('./server/db/json/messages.json', JSON.stringify(messages, null, ' '), err => {
//                 if (!err) {
//                     res.json({ status: 1 })
//                 }
//             })
//         }
//     });
// });

// app.put('/messages', (req, res) => {
//     fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
//         if (!err) {
//             let messages = JSON.parse(data);

//             Object.values(messages).forEach(m => {
//                 if (m.user) {
//                     m.user = req.body.name;
//                 }   
//             })

//             fs.writeFile('./server/db/json/messages.json', JSON.stringify(messages, null, ' '), err => {
//                 if (!err) {
//                     res.json({ status: 1 })
//                 }
//             })
//         }
//     });
// });

// app.delete('/chats', (req, res) => {
//     fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
//         if (!err) {
//             let chats = JSON.parse(data);

//             chats[req.body.chatId].deleted = true;

//             fs.writeFile('./server/db/json/chats.json', JSON.stringify(chats, null, ' '), err => {
//                 if (!err) {
//                     res.json({ status: 1 })
//                 }
//             })
//         }
//     });
// });

