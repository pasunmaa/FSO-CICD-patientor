import diagnosData from '../../data/diagnos-entries';
import { DiagnoseEntry } from '../types';

const diagnoses: DiagnoseEntry[] = diagnosData;

export const getDiagnoses = (): DiagnoseEntry[] => {
  return diagnoses;
};
