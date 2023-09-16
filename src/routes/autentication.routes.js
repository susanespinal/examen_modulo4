import { Router } from "express";
import { check } from 'express-validator';
import { login } from '../controllers/autentication.controller.js';
import { valdidarCampos } from "../middlewares/validaciones.js";
import { correoNoExiste } from "../utils/validaciones.bd.js"

const router = Router();

router.post('/login', [
    check('correo')
        .notEmpty().withMessage('El email no debe estar vacío')
        .isEmail().withMessage('El email no tiene el formato correcto.').custom(correoNoExiste),
    check('contrasena', 'La contraseña debe de ser más de 8 carateres').isLength({ min: 6 }),
    valdidarCampos
], login);
export default router;