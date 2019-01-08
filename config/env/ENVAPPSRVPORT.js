const ENVLL = require("./ENVLL")
const ENVMODE = require("./ENVMODE")

const helpers = require("../helpers")

const KDEV = "npm_package_config_app_svrdev_port"
const KDEFAULT = KDEV
const KPROD = "npm_package_config_app_svrprod_port"

const isSet = () => {
  let result =
    KDEFAULT in process.env
      ? helpers.convertToBoolean(process.env[KDEFAULT])
      : false

  if (ENVMODE.hasVDevelopment()) {
    result =
      KDEV in process.env ? helpers.convertToBoolean(process.env[KDEV]) : false
  } else if (ENVMODE.hasVProduction()) {
    result =
      KPROD in process.env
        ? helpers.convertToBoolean(process.env[KPROD])
        : false
  }
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`APPSRVPORT is ${result ? "set" : "not set"}`)
  }
  return result
}

const getVDev = () => {
  let result = process.env[KDEV]
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`APPSRVPORT[${KDEV}] is >>${result}<<`)
  }
  return result
}

const getVProd = () => {
  let result = process.env[KPROD]
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`APPSRVPORT[${KPROD}] is >>${result}<<`)
  }
  return result
}

const get = () => {
  let result = process.env[KDEFAULT]
  if (ENVMODE.hasVProduction()) {
    result = process.env[KPROD]
  } else if (ENVMODE.hasVDevelopment()) {
    result = process.env[KDEV]
  }
  if (ENVLL.isTraceEnabled()) {
    // tslint:disable-next-line:no-console
    console.debug(`APPSRVPORT is >>${result}<<`)
  }
  return result
}

module.exports = {
  KDEFAULT,
  KDEV,
  KPROD,
  get,
  getVDev,
  getVProd,
  isSet,
}
