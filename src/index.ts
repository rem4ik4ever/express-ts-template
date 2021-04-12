import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

// initialize configuration
dotenv.config();

const port: any = process.env.SERVER_PORT;
const app = express();

// define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
  res.send(`Hello world from ${req.hostname}`);
});

// start the Express server
app.listen(port, () => {
  console.log('server started at http://localhost', port);
});
