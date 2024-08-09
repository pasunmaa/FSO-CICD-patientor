#!/bin/bash

echo "Patientor monorepo build script for render"
echo "The current NODE_ENV is: $NODE_ENV"
echo "Install dependencies on root folder"
npm install
echo "Install dependencies on client folder"
cd client
npm install
echo "Lint client"
npm run lint
echo "Build client"
npm run build
echo "Install dependencies on server folder"
cd ../server
npm install
echo "Lint server"
npm run lint
echo "Build server"
npm run tsc
cd ..
