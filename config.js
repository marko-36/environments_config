var environments = {};

// Default environment
environments.default = {
    //'httpPort' : 3001,
    'httpsPort' : 443,
    'envName' : 'default',
    'hostname' : 'hostna.me'
  };
  
// Alternative (NODE_ENV=alt) environment
environments.alt = {
  //'httpPort' : 5001,
  'httpsPort' : 5002,
  'envName' : 'alternative',
  'hostname' : ''  
};
  
// Determine which environment was passed as a command-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';
 
// Check that the current environment is one of the environments above, if not default to staging
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.default;

// Export the module
module.exports = environmentToExport;