npm run start

Use node version 20
`nvm install 20`
`nvm use 20`
`node -v`

## Deploy to Staging Server

1. `npm run build:dev`
2. `git add . && git commit -m 'staging deployment' && git push origin staging`

## Deploy to Production Server

1. `npm run build:prod`
2. `git add . && git commit -m 'production deployment' && git push origin production`
