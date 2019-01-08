const ENVLL = require("./ENVLL")

const helpers = require("../helpers")

const K = "npm_package_config_karma_svr_port"

const isSet = () => {
  const result =
    K in process.env ? helpers.convertToBoolean(process.env[K]) : false
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`KARMASVRPORT is ${result ? "set" : "not set"}`)
  }
  return result
}

const get = () => {
  const result = process.env[K]
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`KARMASVRPORT is >>${result}<<`)
  }
  return result
}

module.exports = {
  K,
  get,
  isSet,
}
