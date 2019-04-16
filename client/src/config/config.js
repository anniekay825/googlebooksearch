let server = 'https://obscure-lake-48428.herokuapp.com/';

const env = process.env.NODE_ENV;

if (env === 'development') {
    server = 'http://localhost:3001';
}

module.exports = server;