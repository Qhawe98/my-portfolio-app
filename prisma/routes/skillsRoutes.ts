import { Router } from 'express';
import { getAllSkills, postSkill } from '../controllers/skillController.ts';

const skillRoutes = Router();

skillRoutes.get('/getSkills', getAllSkills);
skillRoutes.post('/postSkills', postSkill);

export default skillRoutes;