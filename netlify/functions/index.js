// const serverless = require("serverless-http");
// const app = require('../../src/app')

import serverless from 'serverless'
import app from '../../src/app2'

// const handler = serverless(app)
// module.exports.handler = handler
// module.exports.handler = app

export const handler = serverless(api);