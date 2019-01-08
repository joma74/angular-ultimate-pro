const ENVLL = require("./ENVLL")

const helpers = require("../helpers")

const K = "DEBUG"
const V_ON = "on"

const isSet = () => {
  const result =
    K in process.env ? helpers.convertToBoolean(process.env[K]) : false

  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`DEBUG is ${result ? "set" : "not set"}`)
  }
  return result
}

const hasVOn = () => {
  const result = isSet() && process.env[K] === V_ON
  if (ENVLL.isTraceEnabled()) {
    if (result) {
      // tslint:disable-next-line:no-console
      console.debug(`DEBUG is >>${V_ON}<<`)
    } else {
      // tslint:disable-next-line:no-console
      console.debug(`DEBUG is not >>${V_ON}<<`)
    }
  }
  return result
}

const get = () => {
  const result = process.env[K]
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`DEBUG is >>${result}<<`)
  }
  return result
}

module.exports = {
  K,
  V_ON,
  get,
  hasVOn,
  isSet,
}
