# Countries Demo

Countries Demo is full-stack application that allows user to search

The Countries Demo application consists of :
1. Frontend interface, build on React for, which renders, process data about countries. It allows user to search for information on single or group of countries, based on input from the user
2. Backend NodeJS server running Express which relies on REST Countries API to provide information about countries

## Usage

Frontend desc

To configure data received from backend, access `filterCountriesData.js` file

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

### Deploy project

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