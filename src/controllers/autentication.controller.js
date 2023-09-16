import bcryptjs from 'bcryptjs';
import { Users } from '../models/Users.js';
import { generarToken } from '../utils/generar.token.js';
import logger from '../logs/logger.js';

const login = async (req, res) => {
    const { correo, contrasena } = req.body;
    try {
        const user = await Users.findOne({
            where: { correo }
        });
        const validarContrasena = bcryptjs.compareSync(contrasena, user.contrasena);
        if (!validarContrasena) {
            return res.status(400).json({
                msg: 'La contraseña incorrecta.'
            });
        }
        const token = await generarToken(user.correo, user.contrasena);
        res.json({
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Error al generar el Token'
        });
    }

}


export { login }
