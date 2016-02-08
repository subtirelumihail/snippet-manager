import SniptRef from 'lib/db';

export function saveSnippet(data, cb) {
  SniptRef.push(data, cb);
}

export function getSnippet(url, cb) {
  return SniptRef.orderByChild('url').equalTo(url).once('value', cb);
}
