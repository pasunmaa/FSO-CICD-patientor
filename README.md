# FSO-CICD-patientor
Exercise 11.20 monorepo

## Installation

npm workspaces are not used, as they do not support React and vite.

### client
cd client
```npm install```

### server
cd ../server
```npm install```

## Development

run dev: ```npm run dev```
run client separately: ```npm run dev-client```
run server separately: ```npm run dev-server```

validate server is running locally: http://localhost:3001/api/ping

## Linting
```npm run lint-client```
```npm run lint-server```

## Building

```npm run build```
