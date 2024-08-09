import { describe, it, expect } from 'vitest';
import { getDiagnoses } from './src/services/diagnoseService';

describe('Diagnoses Module', () => {
  it('should return a list of diagnoses', () => {
    const diagnoses = getDiagnoses();
    expect(diagnoses).toBeInstanceOf(Array);
    expect(diagnoses.length).toBeGreaterThan(0);
    expect(diagnoses[0]).toHaveProperty('code');
    expect(diagnoses[0]).toHaveProperty('name');
    expect(diagnoses[0]).toHaveProperty('latin');
  });
});