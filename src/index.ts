import express from 'express';
import type { Request, Response } from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

const baseUrl = "/api/v1"

app.get( `${baseUrl}/hello`, (req: Request, res: Response) => {
  res.send('Hello Arnel, Express + TypeScript is running! 🚀');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});