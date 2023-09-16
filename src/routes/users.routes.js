import { Router } from 'express';
import {
    getUsers,
    createUsers,
    getUser,
    updateUsers,
    deleteUsers,
    getUserCategories,
    getUsersCategories
} from '../controllers/users.controller.js';

const router = Router()

//Routes
router.get('/', getUsers);
router.post('/', createUsers);
router.get('/:id', getUser);
router.put('/:id', updateUsers);
router.delete('/:id', deleteUsers);

router.get('/:id/tasks', getUserCategories);
router.get('/:all/tasks/all', getUsersCategories);

export default router;