import express from 'express';
import { join } from 'path';
import { notFound, catchErrors } from './middlewares/errors';
import bodyParser from 'body-parser';
import cors from 'cors';

/* Unused imports
import register from 'babel-core/register';
import babelPolyfill from 'babel-polyfill'; */
/* Old, unused imports and configs:
// import config from './config/config';

// DataBase Connection (we don't have database here)
// // Connect to database
// import dbConfig from './config/database';
// import mongoose from 'mongoose';
//
// mongoose.connect(dbConfig.mongoUrl);
// mongoose.Promise = global.Promise;
// mongoose.connection.on('error', (err) => {
//     console.log('Could not connect to the database. Exiting now...');
//     process.exit();
// });

*/

const app = express();
const port = 1235;

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// routes config
// ...

// errors handling
app.use(notFound);
app.use(catchErrors);

// let's play!
app.listen(port, () => {
    console.log(`Server is running up at port ${port}!`);
});