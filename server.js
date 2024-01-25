import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import SwaggerUI from 'swagger-ui-express';
import './config/db_connect.js';
// Routes:
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import swaggerSpecifica from './config/swagger.js';

const app = express();
const port = 3000;

// import cors from 'cors';
// app.use(cors({ origin: 'http://127.0.0.1:5500' }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    fs.readFile('index.html', (err, fileData) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fileData);
        return res.end();
    })
});

app.use('/api/docs', SwaggerUI.serve, SwaggerUI.setup(swaggerSpecifica));

app.use('/api/auth', authRoutes);

app.use('/api', taskRoutes);

// To process STATIC files by route '/uploads' for path 'uploads':
app.use('/uploads', express.static('uploads'));

app.use('/uploads', uploadRoutes);

app.listen(port, () => {
    console.log(`See API docs at http://localhost:${port}/api/docs`);
});
