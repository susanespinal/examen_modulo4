import { Router } from 'express';
import { 
    getProducts, 
    createProducts,
    getProduct, 
    updateProducts, 
    deleteProducts} from '../controllers/products.controller.js';


const router = Router()

//Routes
router.get('/', getProducts);
router.post('/', createProducts);
router.get('/:id', getProduct);
router.put('/:id', updateProducts);
router.delete('/:id', deleteProducts);

export default router;