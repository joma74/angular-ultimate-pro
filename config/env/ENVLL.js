const helpers = require("../helpers")

const K = "LL"
const V_DEBUG = "debug"
const V_TRACE = "trace"

/**
 *
 * @param {boolean=} outputDebug
 */
const isSet = (outputDebug) => {
  const result =
    K in process.env ? helpers.convertToBoolean(process.env[K]) : false
  if (outputDebug) {
    // tslint:disable-next-line:no-console
    console.log(`LL is ${result ? "set" : "not set"}`)
  }
  return result
}

const hasVDebug = () => {
  return isSet(false) && process.env[K] === V_DEBUG
}

const isDebugEnabled = () => {
  return hasVTrace() || hasVDebug()
}

const hasVTrace = () => {
  return isSet(false) && process.env[K] === V_TRACE
}

const isTraceEnabled = () => {
  return hasVTrace()
}

const get = () => {
  const result = process.env[K]
  if (hasVTrace()) {
    // tslint:disable-next-line:no-console
    console.debug(`LL is >>${result}<<`)
  }
  return result
}

module.exports = {
  K,
  V_DEBUG,
  get,
  hasVDebug,
  hasVTrace,
  isDebugEnabled,
  isSet,
  isTraceEnabled,
}
