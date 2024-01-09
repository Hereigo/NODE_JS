import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import SwaggerUI from 'swagger-ui-express';
import './config/db_connect.js';
import cors from 'cors';

// Routes:
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import swaggerSpecifica from './config/swagger.js';

const app = express();
const port = 3000;

// app.use(cors({ origin: 'http://127.0.0.1:5500' }));

app.use(bodyParser.json());

// TODO:
// Move this into Routes:
app.get('/', (req, res) => {
    fs.readFile('index.html', (err, fileData) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fileData);
        return res.end();
    })
});

app.use('/api/docs', SwaggerUI.serve, SwaggerUI.setup(swaggerSpecifica));

app.use('/api', authRoutes);
app.use('/api', taskRoutes);

// To process STATIC files by route '/uploads' for path 'uploads':
app.use('/uploads', express.static('uploads'));

/////////////////////////////////////////////// app.use('/uploads', filesRouter); 

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
