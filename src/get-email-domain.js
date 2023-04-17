const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let i = email.indexOf('@');
  let domain = email.slice(i + 1);
  if (domain.includes('@')) {
    return getEmailDomain(domain)
  }
  return domain;
}

module.exports = {
  getEmailDomain
};
