const express = require('express');
const mongo = require('mongoose');

const ChatsController = require('./db/controllers/chats_controller.js');
const MsgController = require('./db/controllers/message_controller.js');

const app = express();
const fs = require('fs');
app.use(express.json());

mongo.connect('mongodb://localhost/geekapp-v1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => { console.log('DB connected!') })
.catch(() => { console.log('DB offline!') })

app.get('/messages/:id', MsgController.load);
app.post('/messages', MsgController.send);

app.get('/chats', ChatsController.load);
app.post('/chats', ChatsController.create);

app.listen(3300, () => {
    console.log('listening @ port 3300....');
});

app.get('/profiles', (req, res) => {
    fs.readFile('./server/db/json/profiles.json', 'utf-8', (err, data) => {
        if (!err) {
            let d = JSON.parse(data);
            res.json(d);
        }
    });
});
