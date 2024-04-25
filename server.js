const express = require('express')
const {setupLogging} = require("./logging");
const { setupProxies } = require('./proxy');
const { ROUTES } = require('./routes');
const { setupAuth } = require('./auth');
const { setupRateLimit } = require('./ratelimit');

const app = express()
const port = 3010;
setupLogging(app)
setupAuth(app,ROUTES)
setupProxies(app,ROUTES)
setupRateLimit(app,ROUTES)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})