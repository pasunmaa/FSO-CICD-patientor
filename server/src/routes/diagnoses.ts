import express from 'express';
import { DiagnoseEntry } from '../types';
import { getDiagnoses }  from '../services/diagnoseService';

const router = express.Router();

router.get('/', (_req, res) => {
  const diagnoses: DiagnoseEntry[] = getDiagnoses();
  res.json((diagnoses));
});

/* router.post('/', (_req, res) => {
  res.send('Saving a diary!');
}); */

export default router;