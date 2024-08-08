# Patientor backend

### Scope
The application covers Helsinki University fullstackopen course module 9 Typescript.
It includes solutions to excercises 9.8 - 9.13, 9.20, 9.22, and some bug fixes and documentation (this file) in the last commits.

Some excercises have been developed in their own branches, but all is merged back to main with pull requests.

### Getting started
  - To get the app running just install its dependencies with ```npm install``` and run it with ```npm run dev```.

### Supported endpoints
  GET
  - /api/ping
  - /api/diagnoses
  - /api/patients
  - /api/patients/:id
  POST
  - /api/patients

### Testing and validation
  - The application has been tested manually
    - See test_calls.rest
    - From front end https://github.com/pasunmaa/FSO-patientor-front
  - lint ```npm run lint```

### Production build
  -  Create a production build with ```npm run tsc```
  -  Run a production build with ```npm start```

### To do
  - Date validation when creating new patient could be improved. For example now it accepts 31 days for all months.
