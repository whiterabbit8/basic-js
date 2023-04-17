const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  options.separator = options.separator ? options.separator : '+';
  options.additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
  options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  let add = '';
  if (Object.getOwnPropertyNames(options).includes('addition')) {
    add = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition;
  }
  let result = (str + add + options.separator).repeat(options.repeatTimes - 1) + str + add;
  return result;
}

module.exports = {
  repeater
};
