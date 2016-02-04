var env = process.env.NODE_ENV || 'dev';

var config = {
  compress:    true,
  extract:     true,
  sourcemap:   false,
};

if (env === 'dev') {
  config.compress    = false;
  config.sourcemap   = true;
}

module.exports = config;
