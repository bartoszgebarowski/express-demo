# Countries Demo

Countries Demo is a proof-of-concept application which aims to provide a user-friendly interface to obtain information about countries

The Countries Demo application consists of the following:
1. Frontend interface, built on React, renders process data about countries. It allows users to search for information on a single or group of countries based on input from the user
2. Backend NodeJS server running Express, which relies on RESTcountries API to provide information about countries

[Restcountries API address](https://restcountries.com/)
[Frontend live address](https://react-countries-demo.onrender.com)
[Backend live address](https://express-js-countries-demo.onrender.com)

## Usage

For general purpose of this application Cors settings were set according to documentation by "Simple usage"
[Cors package documentation](https://www.npmjs.com/package/cors?activeTab=readme). 
For business projects, Cors settings should be configured to accept only specific requests

To configure data received from backend, access `filterCountriesData.js` file.

### Run locally 

1. Click the Code button
2. Navigate to the HTTPS tab
3. Click the clipboard copy icon (message "Copied" should appear instead of the icon)
4. Choose the IDE with git bash support
5. Use command ```git clone copied-url``` into bash terminal

#### Backend 
1. Open terminal
2. Navigate to backend folder
3. Enter `npm install`
4. In backend folder create `.env` file
5. Add `PORT=3001`
6. Enter `npm run start:dev` in terminal

#### Frontend 

1. Open terminal
2. Navigate to frontend folder
3. Enter `npm install`
4. Create `.env.development.local` file
5. Enter `REACT_APP_API_ACCESS = 'LOCAL'`
6. Navigate to `api.js` file
7. Configure your URL's
8. Enter `npm start`

### Deploy project on Render

[Render website](https://render.com/)

#### Backend

1. Navigate to Render website
2. Start new Web Service
3. Enter `./backend` as root directory
4. Enter `npm install` as build command
5. Enter `node ./src/index.js` as start command

#### Frontend 

1. Navigate to Render website
2. Start new static website
3. Enter `./frontend` as root directory
4. Enter `npm run build` as build command
5. Enter `build` as frontend directory