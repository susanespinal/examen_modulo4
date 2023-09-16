import { Router } from 'express';
import { 
    getCategories, 
    createCategories,
    getCategory, 
    updateCategories, 
    deleteCategories} from '../controllers/categories.controller.js';


const router = Router()

//Routes
router.get('/', getCategories);
router.post('/', createCategories);
router.get('/:id', getCategory);
router.put('/:id', updateCategories);
router.delete('/:id', deleteCategories);

export default router;