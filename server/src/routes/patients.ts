/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express from 'express';
import { NonSensitivePatientEntry } from '../types';
import {toNewPatientEntry} from '../utils';
import patientService  from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  const patients: NonSensitivePatientEntry[] = patientService.getPatients();
  res.json((patients));
});

// Get individual patient by id
router.get('/:id', (req, res) => {
  const patient = patientService.getPatientById(req.params.id);
  //console.log(patient);
  if (patient) {
    res.json(patient);
  } else {
    res.status(404).send({ error: 'Patient not found' });
  }
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);

    const addedEntry = patientService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;