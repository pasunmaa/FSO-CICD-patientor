import express from 'express';
import cors from 'cors';
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';

const app = express();
app.use(express.json());

const PORT = 3001;

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

// Error-handling middleware for JSON parsing errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, _req: any, res: any, next: any) => {
  if (err instanceof SyntaxError && 'body' in err) {
    console.error('Bad JSON content');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  next(); // Passes the error to the next error handler
});

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diagnoses', diagnosesRouter);
app.use('/api/patients', patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});