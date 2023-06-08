import 'dotenv/config';
import express from 'express';

import './shared/middleware/services/TranslationsYup';

import { router } from './routes';

const server = express();

server.use(express.json());

server.use(router);

export { server };
