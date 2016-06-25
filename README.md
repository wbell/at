# at
Just an exercise. Best run on Mac OSX.

## Installation
After cloning the repository to your machine, `cd` to the project root.

Run the command `npm install` and allow all node packages to install

## Running Local Dev Server
After installation, run the command `npm start`.

This compiles the source code, starts a "live reload" server, and watches all source files for changes (browser will automatically refresh when changes are detected).

Your default browser will open a new window at the location http://localhost:9900/

## Packaging
To create a compressed code package (ZIP), there are 2 different commands

`npm run zip`: creates a dev build (uncompressed files, sourcemaps), outputs to './packaged' directory

`npm run zipProd`: creates a production build (minified files, no sourcemaps), outputs to './packaged' directory

## Tests
To run unit tests, use the command `npm test`
