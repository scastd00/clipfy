module.exports = {
  port: process.env.PORT || 8081,

  db: {
    databaseName: process.env.DB_NAME || 'clipfy',
    username: process.env.DB_USER || 'clipfy',
    password: process.env.DB_PASSWORD || 'Clipfy_Admin1',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost',
      storage: './clipfy.mysql',
      logging: false // Prevent printing SQL queries
    }
  },

  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
    expirationTime: 60 * 60 * 24 // One day
  }
};
