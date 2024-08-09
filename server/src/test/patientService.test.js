import { describe, it, expect } from 'vitest';
import patientService from '../services/patientService'; 

// Mock data for testing
const defaultPatientNames = [
    "John McClane",
    "Martin Riggs",
    "Hans Gruber",
    "Dana Scully",
    "Matti Luukkainen"
];

describe('Patients service', () => {
    it('should return a default patient list', () => {
        const result = patientService.getPatients();

        expect(result).toBeInstanceOf(Array);
        expect(result.length).toBe(5);
        expect(result[0]).toHaveProperty('name');
        expect(result[0]).toHaveProperty('dateOfBirth');

        // Get patient names from complete result
        const patientNames = result.map(patient => patient.name);
        //console.log(patientNames);
        expect(patientNames).toStrictEqual(defaultPatientNames);
    });
});
