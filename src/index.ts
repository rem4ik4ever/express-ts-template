import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { opsBasePath, opsMiddleware } from './middlewares/ops';

// initialize configuration
dotenv.config();

const port: any = process.env.SERVER_PORT;
const app = express();

app.use(opsBasePath, opsMiddleware);

// define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
  res.send(`Hello world from ${req.hostname}`);
});

// start the Express server
app.listen(port, () => {
  console.log('server started at http://localhost', port);
});
