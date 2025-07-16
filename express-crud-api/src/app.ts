import express from 'express';
import bodyParser from 'body-parser';
import { setNotesRoutes } from './routes/notesRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Set up routes for notes
setNotesRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});