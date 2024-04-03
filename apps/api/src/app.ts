import express, { type Express, type Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

export const createServer = (): Express => {
  const app = express();
  app
    .use(morgan('dev'))
    .use(express.json())
    .use(cors())
    .get('/status', (_, res: Response) => {
      return res.json({ ok: true });
    });

  return app;
};
