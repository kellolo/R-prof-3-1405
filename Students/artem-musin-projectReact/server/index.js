const express = require('express');
const mongo = require('mongoose');


const app = express();

app.use(express.json());

const fs = require('fs')

app.get('/messages', (req, res) => {
    fs.readFile('./server/db/messages.json', 'utf-8', (err, data) => {
        if(!err) {
            let d = JSON.parse(data);
            res.json(d);
        }
    })
});

app.post('/messages', (req, res) => {
    fs.readFile('./server/db/messages.json', 'utf-8', (err, data) => {
        if(!err) {
            let messages = JSON.parse(data);

            messages[req.body.messageId] = {
                user: req.body.sender,
                text: req.body.text
            };
            
            fs.writeFile('./server/db/messages.json', JSON.stringify(messages, null, ' '), err => {
                if (!err) {
                    res.json({ status: 1 })
                }
            })
        }
    })
});

app.get('/chats', (req, res) => {
    fs.readFile('./server/db/chats.json', 'utf-8', (err, data) => {
        if(!err) {
            let d = JSON.parse(data);
            res.json(d);
        }
    })
});

app.post('/chats', (req, res) => {
    fs.readFile('./server/db/chats.json', 'utf-8', (err, data) => {
        if(!err) {
            let chats = JSON.parse(data);

            chats[req.body.chatId] = {
                title: req.body.title,
                messagesList: []
            };
            
            fs.writeFile('./server/db/chats.json', JSON.stringify(chats, null, ' '), err => {
                if (!err) {
                    res.json({ status: 1 })
                }
            })
        }
    })
});

app.listen(3300, () => {
    console.log('listening @ port 3300');
})