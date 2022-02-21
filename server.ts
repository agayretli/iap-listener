import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import routes from './src/routes';

dotenv.config();
const app = express();
const corsOptions = {
    origin: 'http://localhost:80',
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Handle GET requests to /api route
app.get('/api', (req: any, res: { json: (arg0: { message: string }) => void }) => {
    res.json({ message: 'Hello from server!' });
});

// Added routes to express
routes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT);
