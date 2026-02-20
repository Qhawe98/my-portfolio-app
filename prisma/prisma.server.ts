import express from 'express';
import skillRouter from './routes/skillsRoutes.ts';
import skillCategoryRouter from './routes/skillCategoryRoutes.ts';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', skillRouter);
app.use('/api', skillCategoryRouter);

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
