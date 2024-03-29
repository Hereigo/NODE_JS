﻿import { connect } from 'mongoose';

import { URI } from './secrets.js';

connect(URI).then(() => {
    console.log('Successfully connected to DB.');
}).catch((err) => {
    console.err(err);
});