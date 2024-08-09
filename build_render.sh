#!/bin/bash

echo "Patientor monorepo build script for render"
echo "The current NODE_ENV is: $NODE_ENV"
npm install
cd client
npm install
npm run build
cd ../server
npm install
npm run build
cd ..

