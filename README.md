[![CircleCI](https://circleci.com/gh/navikt/data-catalog-frontend.svg?style=svg)](https://circleci.com/gh/navikt/data-catalog-frontend)

# Data Catalog Frontend
This is frontend open source project repository for the Data Catalog project. You can find the running application at [DataCatalog application link](https://35.201.118.102/)

# Settings
To run the Azure authentication please create a `.env.local` file on root folder(outside src) and assign the values of below two environment variables. 

`REACT_APP_CLIENT_ID='Add client id from Azure'`

`REACT_APP_TENANT='Add tenant id from Azure'`

After that application can be run locally by stub's.

## Available Scripts

In the project directory, you can run:

#### Run with stub's `npm i &&  npm run start-with-stub`
Runs the app in the development mode with stub data server running on [http://localhost:8080/data](http://localhost:8080/data).<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm i && npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
#### `npm test`

#### `npm test -- --coverage`

#### `npm run build`

## Prerequisites

To get started you need to install the following components on your computer:

* [NodeJS](https://nodejs.org) (use nvm to switch between versions https://github.com/creationix/nvm).



