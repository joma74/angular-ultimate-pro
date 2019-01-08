const ENVLL = require("./ENVLL")

const helpers = require("../helpers")

const K = "npm_package_config_browser_rmtdbg_port"

const isSet = () => {
  let result =
    K in process.env ? helpers.convertToBoolean(process.env[K]) : false
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`BROWSERRMTDBGPORT is ${result ? "set" : "not set"}`)
  }
  return result
}

const get = () => {
  let result = process.env[K]
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`BROWSERRMTDBGPORT is >>${result}<<`)
  }
  return result
}

module.exports = {
  K,
  get,
  isSet,
}
