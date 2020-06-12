const express = require('express')
const mongo = require('mongoose');

const messageController = require('./db/controllers/message');

const app = express();
const port = 3300;
const dbUrl = 'localhost/geekapp-v1';

app.use(express.json());

app.listen(port, () => console.log(`listening at http://localhost:${ dbUrl }`));

app.get('/messages', messageController.load);
app.post('/messages', messageController.send);

mongo.connect(`mongodb://${ dbUrl }`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB connected!')
}).catch((exception) => {
    console.log(`Failed connect to DB ${ dbUrl }, ${ exception }`)
});

