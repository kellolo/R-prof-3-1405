import botMD from './botMD.js';
import chatMw from './chatMw.js';
import { apiMiddleware } from 'redux-api-middleware';


export default [
    apiMiddleware,
    chatMw,
    botMD,
]