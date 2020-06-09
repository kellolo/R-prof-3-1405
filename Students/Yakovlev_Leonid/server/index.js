const express = require('express');
const mongo = require('mongoose');

const app = express();
app.use(express.json());

const fs = require('fs');

app.get('/messages', (req, res) => {
    fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
        if(!err) {
            let d = JSON.parse(data);
            res.json(d);
        }
    })
});

app.post('/messages', (req, res) => {
    fs.readFile('./server/db/json/messages.json', 'utf-8', (err, data) => {
        if (!err) {
            let messages = JSON.parse(data);
            console.log(req.body);  
            messages[req.body.messageId] = {
                
            }          
        }
    })
})

app.listen(3300, () => {
    console.log('Listening @ port 3300....');    
});