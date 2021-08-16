import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import Db from './Config/Db.js';
import router from './Routers/index.js';
dotenv.config();
Db();
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
	res.send('Api running');
});
app.use('/', router);

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
