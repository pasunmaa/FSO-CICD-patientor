#!/bin/bash

echo "Patientor monorepo build script for render"
echo "The current NODE_ENV is: $NODE_ENV"
echo "Install dependencies on root folder"
npm install --include dev
npm ls | tee npm_ls_root.txt
echo "Install dependencies on client folder"
cd client
npm install --include prod --include dev
npm ls | tee npm_ls_client.txt
echo "Lint client"
npm run lint
echo "Build client"
npm run build
echo "Install dependencies on server folder"
cd ../server
npm install --include prod --include dev
npm ls | tee npm_ls_server.txt
echo "Lint server"
npm run lint
echo "Build server"
npm run tsc | tee tsc_server.txt
cd ..
