import { Schema } from './recurly/schemas.js';
import { Client } from './recurly/Client.js';
import { ApiError } from './recurly/ApiError.js';
import errors from './recurly/api_errors.js'
import resources from './recurly/resources.js';

const exps = {
  Schema,
  Client,
  ApiError
}

exps.errors = errors;

for (let key in resources) {
  exps[key] = resources[key]
}

Schema.locateResource = name => resources[name]

export default exps
