const server = require('./config/server');
require('./config/database');
require('./routers/route')(server);