import { NewPatientEntry, Gender, EntryType, Entry } from './types';

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
    if (!isString(name)) {
        throw new Error('Incorrect or missing name');
    }
    return name;
};

const parseSsn = (ssn: unknown): string => {
    if (!isString(ssn)) {
        throw new Error('Incorrect or missing name');
    }
    return ssn;
};

const parseOccupation = (occupation: unknown): string => {
    if (!isString(occupation)) {
        throw new Error('Incorrect or missing name');
    }
    return occupation;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const parseDateOfBirth = (birthday: unknown): string => {
    if (!isString(birthday) || !isDate(birthday)) {
        throw new Error('Incorrect date: ' + birthday);
    }
    return birthday;
};

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(v => v.toString()).includes(param);
};

const parseGender = (gender: unknown): Gender => {
    if (!isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect gender: ' + gender);
    }
    return gender;
};

// Entry is considered to be correct if it has valid type
const isEntry = (param: string): param is EntryType => {
    return Object.values(EntryType).map(v => v.toString()).includes(param);
};

// Proper validation of all the fields of the entries not implemented. Only the field type is checked.
// Thus input parameter is assumed to be Entry array.
const parseEntries = (entries: unknown): Entry[] => {
    // Walk through all entries in the array and check if they are correct
    let parsedEntries: Entry[] = [];
    const inputEntries = entries as Entry[]; 
    inputEntries.forEach((entry: Entry) => {
        if (!isString(entry.type) || !isEntry(entry.type)) {
            throw new Error('Incorrect entry type: ' + entry.type);
        }
        else {
            parsedEntries = [...parsedEntries, entry];
        }
    });
    
    return parsedEntries;
};


export const toNewPatientEntry = (object: unknown): NewPatientEntry => {
    if (!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }

    if ('name' in object && 'dateOfBirth' in object &&
        'ssn' in object && 'gender' in object && 
        'occupation' in object && 'entries' in object ) {
        const newEntry: NewPatientEntry = {
            name: parseName(object.name),
            dateOfBirth: parseDateOfBirth(object.dateOfBirth),
            ssn: parseSsn(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseOccupation(object.occupation),
            entries: parseEntries(object.entries),
        };

        return newEntry;
    }

    throw new Error('Incorrect data: a field missing');
};