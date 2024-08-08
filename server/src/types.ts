export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string;
}

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
}

export interface PatientEntry {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;
    entries: Entry[];
}

// Define special omit for unions
// https://github.com/microsoft/TypeScript/issues/42680
type UnionOmit<T, K extends string | number | symbol > = T extends unknown ? Omit<T, K> : never;

export type NonSensitivePatientEntry = UnionOmit<PatientEntry, 'ssn'>;

export type NewPatientEntry = UnionOmit<PatientEntry, 'id'>;

export enum EntryType {
    Hospital = 'Hospital',
    OccupationalHealthcare = 'OccupationalHealthcare',
    HealthCheck = 'HealthCheck',
}

interface BaseEntry {
    id: string;
    description: string;
    type: EntryType;
    date: string;
    specialist: string;
    diagnosisCodes?: Array<DiagnoseEntry['code']>;
}

// HospitalEntry definition
interface Discharge {
    date: string;
    criteria: string;
}

interface HospitalEntry extends BaseEntry {
    //type: "Hospital";
    discharge: Discharge;
}

// OccupationalHealthcareEntry definition
interface SickLeave {
    startDate: string;
    endDate: string;
}

interface OccupationalHealthcareEntry extends BaseEntry {
    //type: "OccupationalHealthcare";
    employerName: string;
    sickLeave?: SickLeave;
}

// HealthCheckEntry definition
export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
    //type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;
