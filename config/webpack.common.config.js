/**
 * @type {import ("webpack").Node}
 */
const node = {
  Buffer: false,
  clearImmediate: false,
  clearTimeout: true,
  crypto: "empty",
  global: true,
  module: false,
  process: true,
  setImmediate: false,
  setTimeout: true,
}

/**
 * @type {import ("webpack").Configuration}
 */
const webpackConfig = { node }

module.exports = webpackConfig
