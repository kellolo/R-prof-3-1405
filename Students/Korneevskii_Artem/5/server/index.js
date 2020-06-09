const express = require('express');
const mongo = require('mongoose');

const app = express();
const fs = require('fs');
app.use(express.json());

app.listen(3300, () => {
    console.log('listening @ port 3300....');
});

app.get('/messages', (req, res) => {
    fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
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
                text: req.body.text
            };

            fs.writeFile('./server/db/json/messages.json', JSON.stringify(messages, null, ' '), err => {
                if (!err) {
                     res.json({ status: 1 })
                }
            })
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

app.post('/chats', (req, res) => {
    fs.readFile('./server/db/json/chats.json', 'utf-8', (err, data) => {
        if (!err) {
            let chats = JSON.parse(data);

            chats[req.body.chatId] = {
                title: req.body.title,
                messagesList: req.body.messagesList                
            };

            fs.writeFile('./server/db/json/chats.json', JSON.stringify(chats, null, ' '), err => {
                if (!err) {
                     res.json({ status: 1 })
                }
            })
        }
    });
});

app.get('/profiles', (req, res) => {
    fs.readFile('./server/db/json/profiles.json', 'utf-8', (err, data) => {
        if (!err) {
            let d = JSON.parse(data);
            res.json(d);
        }
    });
});
