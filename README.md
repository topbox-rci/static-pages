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

### Test

    npm test

### Deploy

To get everything prod ready in the `dist` folder run

    npm run deploy
