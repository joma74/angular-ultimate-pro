const path = require("path")

const _root = path.resolve(__dirname, "..")
const _rootRel = path.relative(".", "..")

/**
 * Joins the path of args with this "./.." as root
 * @param {...string} args
 * @returns {string} an absolute path
 */
function rootAbs(args) {
  args = Array.prototype.slice.call(arguments, 0)
  return path.join.apply(path, [_root].concat(args))
}

/**
 * Joins the path of args with this "./.." as root
 * @param {...string} args
 * @returns {string} an absolute path
 */
function rootRel(args) {
  args = Array.prototype.slice.call(arguments, 0)
  return path.join.apply(path, [_rootRel].concat(args))
}

/**
 * The documentation on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions suggests the following solution for escaping a regular expression
 * @param {string} theRegExp
 */
function escapeRegExp(theRegExp) {
  return theRegExp.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // $& means the whole matched string
}

/**
 *
 * @param {string} theString
 */
function convertToBoolean(theString) {
  return !!theString
}

module.exports = {
  convertToBoolean,
  escapeRegExp,
  rootAbs: rootAbs,
  rootRel,
}
