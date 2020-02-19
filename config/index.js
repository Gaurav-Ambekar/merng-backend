require('dotenv/config');
const PORT = process.env.PORT;
const DB = process.env.MONGOURI;
const SECRETKEY = process.env.SECRETKEY;
module.exports.PORT = PORT;
module.exports.DB = DB;
module.exports.SECRETKEY = SECRETKEY;
