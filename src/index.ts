import { Request, Response } from "express";

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

type File = string;

app.post('/readText', (req: Request, res: Response) => {
  const { file }: {file: File} = req.body;
  console.log(file);

  if (!file) {
    return res.status(400).send('File is required');
  }
  
  res.status(200).send('File received');
});

app.listen(process.env.PORT ?? 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
}); 