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