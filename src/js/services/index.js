import SniptRef from 'lib/db';

/**
 * Save the snippet to the firebase dn
 * @param  {object}   data [the snippet data]
 * @param  {Function} cb   [the callback function]
 * @return {object}        [return the snippet object]
 */
export function saveSnippet(data, cb) {
  SniptRef.push(data, cb);
}

/**
 * Get a signle snippet from the firebase refernce
 * @param  {string}   url [the snippet url by wich we get the data]
 * @param  {Function} cb  [the callback function]
 * @return {object}       [returns the snippet object]
 */
export function getSnippet(url, cb) {
  return SniptRef.orderByChild('url').equalTo(url).once('value', cb);
}

/**
 * Get the list with all the snippets from the db
 * @param  {Function} cb [the callback function]
 * @return {object}      [this should be converted to an array]
 */
export function getSnippets(cb) {
  return SniptRef.on('value', cb);
}
