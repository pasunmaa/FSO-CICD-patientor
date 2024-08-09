// Adjust apiBaseUrl to match the environment
const env = import.meta.env.VITE_ENV;
const productionApiBaseUrl = import.meta.env.VITE_API_BASE_URL;

export const apiBaseUrl = ((env === undefined) || (env === 'dev'))
  ? 'http://localhost:3001/api'
  : productionApiBaseUrl;

console.log('API base URL:', apiBaseUrl);

import { Patient, Gender, EntryType } from "./types";

const emptyEntry = {
    id: "",
    description: "",
    type: EntryType.OccupationalHealthcare,
    date: "",
    specialist: "",
    employerName: "",
};

export const emptyPatient: Patient = {
    id: "",
    name: "",
    occupation: "",
    gender: Gender.Other,
    entries: [emptyEntry],
};
