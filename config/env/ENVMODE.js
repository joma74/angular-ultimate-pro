const ENVLL = require("./ENVLL")

const helpers = require("../helpers")

const K = "NODE_ENV"
const KAlt = "ENV"

const V_DEVELOPMENT = "development"
const V_DEFAULT = V_DEVELOPMENT
const V_PRODUCTION = "production"

const isSet = () => {
  const result =
    K in process.env ? helpers.convertToBoolean(process.env[K]) : false
  if (ENVLL.isTraceEnabled()) {
    if (!result) {
      const e = new Error("MODE is not set")
      // tslint:disable-next-line:no-console
      console.warn(e)
    } else {
      // tslint:disable-next-line:no-console
      console.debug("MODE is set")
    }
  }
  return result
}

const hasVDevelopment = () => {
  const result = isSet() && process.env[K] === V_DEVELOPMENT
  if (ENVLL.isTraceEnabled()) {
    if (result) {
      // tslint:disable-next-line:no-console
      console.debug(`MODE is >>${V_DEVELOPMENT}<<`)
    } else {
      // tslint:disable-next-line:no-console
      console.debug(`MODE is not >>${V_DEVELOPMENT}<<`)
    }
  }
  return result
}

const hasVProduction = () => {
  const result = isSet() && process.env[K] === V_PRODUCTION
  if (ENVLL.isTraceEnabled()) {
    if (result) {
      // tslint:disable-next-line:no-console
      console.debug(`MODE is >>${V_PRODUCTION}<<`)
    } else {
      // tslint:disable-next-line:no-console
      console.debug(`MODE is not >>${V_PRODUCTION}<<`)
    }
  }
  return result
}

const get = () => {
  const result = process.env[K]
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`MODE is >>${result}<<`)
  }
  return result
}

const setVDevelopment = () => {
  process.env[K] = process.env[KAlt] = V_DEVELOPMENT
  return get()
}

const setVProduction = () => {
  process.env[K] = process.env[KAlt] = V_PRODUCTION
  return get()
}

module.exports = {
  K,
  V_DEFAULT,
  V_DEVELOPMENT,
  V_PRODUCTION,
  get,
  hasVDevelopment,
  hasVProduction,
  isSet,
  setToDevelopment: setVDevelopment,
  setToProduction: setVProduction,
}
