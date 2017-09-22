# Static Pages

This repo houses all static pages used across sites. For example error pages.

## Requirements

* Nvm: ~0.31.7

## Setup
Use the right node version.

    nvm use

You will want to install all required node packages:

    npm install
    
To generate the static assets and run the site:

    npm start
    
If you want to develop this will watch and compile static asset changes

    npm run watch

### Data

The auth0 example relies on data to function fully. Please copy `auth0.asmple.json` making a new file `auth0.json` and fill out all fields with information gained from a live auth0 page.

### Test

    npm test

### Deploy

To get everything prod ready in the `dist` folder run

    npm run deploy
