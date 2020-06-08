const express = require('express');
const mongo = require('mongoose');

const Message = require('./db/models/message');

const fs = require('fs');
const app = express();
app.use(express.json());

// mongo.connect('mongodb://localhost/geekapp-v1', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => { console.log('DB connected!') })
// .catch(() => { console.log('DB offline!') })

// app.post('/messages', async (req, res) => {
//     let message = new Message(req.body)
//     message = await message.save();
//     res.json({status: 1})
// });

app.get('/messages', (req, res) => {
    fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
        if (!err) {
            let d = JSON.parse(data);
            res.json(d);
        }
    });
});

app.get('/chats', (req, res) => {
    fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
        if (!err) {
            let d = JSON.parse(data);
            res.json(d);
        }
    });
});

app.post('/messages', (req, res) => {
    fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
        if (!err) {
            let messages = JSON.parse(data);

            messages[req.body.messageId] = {
                user: req.body.sender,
                text: req.body.text,
                deleted: false,
                chatId: req.body.chatId 
            };

            fs.writeFile('./server/db/json/messages.json', JSON.stringify(messages, null, ' '), err => {
                if (!err) {
                    res.json({ status: 1 })
                }
            })
        }
    });
});

app.post('/chats', (req, res) => {
    fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
        if (!err) {
            let chats = JSON.parse(data);

            chats[req.body.chatId] = {
                title: req.body.title,
                deleted: false,
                messagesList: []
                
            };

            fs.writeFile('./server/db/json/chats.json', JSON.stringify(chats, null, ' '), err => {
                if (!err) {
                    res.json({ status: 1 })
                }
            })
        }
    });
});

app.delete('/messages', (req, res) => {
    fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
        if (!err) {
            let messages = JSON.parse(data);

            messages[req.body.messageId].deleted = true;

            fs.writeFile('./server/db/json/messages.json', JSON.stringify(messages, null, ' '), err => {
                if (!err) {
                    res.json({ status: 1 })
                }
            })
        }
    });
});

app.delete('/chats', (req, res) => {
    fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
        if (!err) {
            let chats = JSON.parse(data);

            chats[req.body.chatId].deleted = true;

            fs.writeFile('./server/db/json/chats.json', JSON.stringify(chats, null, ' '), err => {
                if (!err) {
                    res.json({ status: 1 })
                }
            })
        }
    });
});

app.listen(3300, () => {
    console.log('listening @ port 3300....');
});