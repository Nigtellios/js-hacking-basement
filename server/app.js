/* Basic Environment declaration */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

/* Use Body Parser and CORS libraries */
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());
app.use(cors());

/* Configuration */
const port = 1235;
const postsData = require('./data/postsData');
const usersData = require('./data/postsData');

/* Listen to port */
app.listen(port, () => console.log(`Server is listening on port ${port}`));
