const path = require("path")

const _root = path.resolve(__dirname, "..")

/**
 * Joins the path of args with this "./.." as root
 * @param {...string} args
 * @returns {string}
 */
function root(args) {
  args = Array.prototype.slice.call(arguments, 0)
  return path.join.apply(path, [_root].concat(args))
}

/**
 * The documentation on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions suggests the following solution for escaping a regular expression
 * @param {string} theRegExp
 */
function escapeRegExp(theRegExp) {
  return theRegExp.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") // $& means the whole matched string
}

exports.escapeRegExp = escapeRegExp
exports.root = root
