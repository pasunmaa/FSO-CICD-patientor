import { beforeAll, afterAll, describe, it, expect } from 'vitest';
import request from 'supertest'; 
import app from '../server/src/index';

// Mock data for testing
const defaultPatientNames = [
    "John McClane",
    "Martin Riggs",
    "Hans Gruber",
    "Dana Scully",
    "Matti Luukkainen"
];

let server;

beforeAll(() => {
  server = app.listen(3000); // Start the server on port 3000
});

afterAll(() => {
  server.close(); // Close the server after tests
});

describe('Test patients api', () => {
    it('should return a default patient list', async () => {
      const response = await request(app).get('/api/patients');
      expect(response.status).toBe(200);
  
      // Get patient names from complete result
      const patientNames = response.body.map(patient => patient.name);;
  
      expect(patientNames).toStrictEqual(defaultPatientNames);
    });
});
