import { v1 as uuid } from 'uuid';
import patientData from '../../data/patient-entries';
import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry } from '../types';

const sensitivePatients: NonSensitivePatientEntry[] = patientData;
const patients: PatientEntry[] = patientData;
//console.log(patients);


const getPatients = (): NonSensitivePatientEntry[] => {
  return sensitivePatients.map(({id, name, dateOfBirth, gender, occupation, entries}) => ({
    id, name, dateOfBirth, gender, occupation, entries})
  );
};

const getPatientById = (id: string): PatientEntry | undefined => {
  return patients.find(patient => patient.id === id);
};

const addPatient = (entry: NewPatientEntry) => {
  const newPatientEntry = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    id: uuid(),
    ...entry
  };

  sensitivePatients.push(newPatientEntry);
  return newPatientEntry;
};

export default {
  getPatients,
  getPatientById,
  addPatient
};
