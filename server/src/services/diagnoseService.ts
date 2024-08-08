import diagnosData from '../../data/diagnos-entries';
import { DiagnoseEntry } from '../types';

const diagnoses: DiagnoseEntry[] = diagnosData;

export const getDiagnoses = (): DiagnoseEntry[] => {
  return diagnoses;
};

/* const addDiagnose = () => {
  return null;
};

export default {
  getDiagnoses,
  //addDiagnose
};
*/