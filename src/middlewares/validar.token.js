import jwt from "jsonwebtoken";
import Users from '../models/Users.js'
const validarToken = async (req, res, next) => {
    const token = req.header("token")
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la peticion.'
        });
    }

    try {
        const correo  = jwt.verify(token, process.env.SECRETOR_KEY);
        const usuario = await Users.findOne({
            where: { correo },
        });
        if (!usuario || usuario == "undefined") {
            return res.status(401).json({
                msg: 'Token no válido'
            })
        }
        req.Users = usuario;
        next();
    } catch (error) {
        res.status(401).json({
            msg: 'Token no valido, verifique.'
        });
    }


}

export default validarToken;