import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import notesRoutes  from './routes/notesRoutes.js';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/notes", notesRoutes);

connectDB()
    .then(()=> {
        app.listen(PORT, ()=> {
        console.log(`Server running on PORT: ${PORT}`)
    })
})

