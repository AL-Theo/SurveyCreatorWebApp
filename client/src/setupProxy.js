//proxy set up - no need to import into other files
//Make sure to install -> npm proxy-middleware!!! 
const proxy = require('http-proxy-middleware');

module.exports = function(app) 
{
    app.use(
        proxy(['/api', '/auth/google'], 
        { target: 'http://localhost:5000' })
    );
}