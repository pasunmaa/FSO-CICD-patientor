#!/bin/bash

echo "Patientor monorepo build script for render"
echo "The current NODE_ENV is: $NODE_ENV"
echo "Install dependencies on root folder"
npm install
echo "Install dependencies on client folder"
cd client
npm install
echo "Build client"
npm run build
echo "Install dependencies on server folder"
cd ../server
npm install
echo "Build server"
npm run build
cd ..

