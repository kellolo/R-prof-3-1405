const express = require('express')
const mongo = require('mongoose');

const Message = require('./db/models/message')

const app = express();
const port = 3300;
const fs = require('fs');
const dbUrl = 'localhost/geekapp-v1';

app.use(express.json());


app.listen(port, () => console.log(`listening at http://localhost:${ port }`));

app.get('/messages', (req, res) => {
    fs.readFile('./server/local/messages.json', 'utf-8', (err, data) => {
        if (!err) {
            let parseData = JSON.parse(data);
            res.json(parseData);
        }
    });
});

app.post('/messages', (req, res) => {
    fs.readFile('./server/local/messages.json', 'utf-8', (err, data) => {
        if (!err) {
            let messages = JSON.parse(data);
            if (!messages[req.body.id]) {
                messages[req.body.id] = {};
                req.body.messageId = 1;
            }
            messages[req.body.id][req.body.messageId] = {
                user: req.body.sender,
                text: req.body.text
            }
            fs.writeFile('./server/local/messages.json', JSON.stringify(messages, null, ' '), err => {
                if (!err) {
                    res.json({ status: 1 })
                }
            });
        }
    });
});


/**
 * Для работы с БД TODO
 */

/*
app.listen(port, () => console.log(`listening at http://localhost:${ dbUrl }`));

mongo.connect(`mongodb://${ dbUrl }`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB connected!')
}).catch((exception) => {
    console.log(`Failed connect to DB ${ dbUrl }, ${ exception }`)
});



app.post('/messages', async (req, res) => {
    let message = new Message(req.body);
    message = await message.save();
    res.json({ status: 1 })
});

app.get('/messages', async (req, res) => {
    res.json(await Message.find());
});*/
