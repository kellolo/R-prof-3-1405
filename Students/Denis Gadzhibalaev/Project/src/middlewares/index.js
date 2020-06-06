import { apiMiddleware } from 'redux-api-middleware';
import botMD from './botMD.js';

export default [
    apiMiddleware,
    botMD
];