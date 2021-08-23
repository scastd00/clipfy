const express = require('express');
const bodyParser = require('body-parser'); // Process JSON easily
const cors = require('cors'); // Easily parse JSON
const morgan = require('morgan'); // Any client can hit our server
const { sequelize } = require('./models');
const config = require('./config/config');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

require('./routes')(app);

sequelize.sync({ force: false })
    .then(() => {
        app.listen(config.port);
        console.log(`Server started on port ${config.port}`);
    });
