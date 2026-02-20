import { Router } from 'express';
import { deleteSkillCategory, getAllSkillCategories, postSkillCategory } from '../controllers/skillCategoryController.ts';

const skillCategoryRouter = Router();

skillCategoryRouter.get('/getSkillCategories', getAllSkillCategories);
skillCategoryRouter.post('/postSkillCategories', postSkillCategory);
skillCategoryRouter.delete('/deleteSkillCategory', deleteSkillCategory);

export default skillCategoryRouter;