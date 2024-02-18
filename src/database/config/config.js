require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

console.log('url', process.env.DATABASE_URL);

module.exports = {
  development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  }
}