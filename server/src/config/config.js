module.exports = {
    port: process.env.PORT || 8081,

    db: {
        database: process.env.DB_NAME || 'clipfy',
        user: process.env.DB_USER || 'clipfy',
        password: process.env.DB_PASSWORD || 'clipfy',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './clipfy.sqlite',
            logging: false // Prevent printing SQL queries
        }
    },

    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
};
