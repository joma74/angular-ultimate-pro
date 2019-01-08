const ENVLL = require("./ENVLL")

const helpers = require("../helpers")

const K = "WITHDASHBOARD"
const V_ON = "on"

const isSet = () => {
  const result =
    K in process.env ? helpers.convertToBoolean(process.env[K]) : false
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`WITHDASHBOARD is ${result ? "set" : "not set"}`)
  }
  return result
}

const isNotSet = () => !isSet()

const hasVOn = () => {
  const result = isSet() && process.env[K] === V_ON
  if (ENVLL.isTraceEnabled()) {
    if (result) {
      // tslint:disable-next-line:no-console
      console.debug(`WITHDASHBOARD is >>${V_ON}<<`)
    } else {
      // tslint:disable-next-line:no-console
      console.debug(`WITHDASHBOARD is not >>${V_ON}<<`)
    }
  }
  return result
}

const get = () => {
  const result = process.env[K]
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`WITHDASHBOARD is >>${result}<<`)
  }
  return result
}

/**
 *
 * @param {any} x
 */
const ifSet = (x) => isSet() && x

module.exports = {
  K,
  V_ON,
  get,
  hasVOn,
  ifSet,
  isNotSet,
  isSet,
}
