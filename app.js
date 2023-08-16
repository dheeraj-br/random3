import express from 'express';
import { action } from './action.js';

const app = express();

app.get('/', action);

app.listen(3000);
