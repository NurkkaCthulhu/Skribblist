# Skribblist

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6. It uses a Node.js server with PostgreSQL as back end.

## Project features
* User can view lists
* User can post new lists
* User can delete their list
* User can copy word list easily to skribbl.io

## Installing

1. Download and install PostgreSQL to your computer (https://www.postgresql.org/download/). 
2. Run `npm install` on the root folder to install all the dependencies.
3. Modify server.js connectionString to reflect your PostgreSQL settings.

## Development server

### Angular:
Run `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
### Node.js:
Run `nodemon server.js` for the backend. Backend runs by default on `http://localhost:8080/`. Any changes done to server.js are automatically reloaded when nodemon is used.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
