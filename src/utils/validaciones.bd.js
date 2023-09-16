
import { Users } from '../models/Users.js'
import { Categories } from '../models/Categories.js'
import { Products } from '../models/Products.js'

const existeUsuarioPorId = async (id) => {

    const existeUsuario = await Users.findOne({
        where: {
            id,
        }
    });
    if (!existeUsuario) {
        throw new Error(`El id (${id}) no existe `);
    }
}

const correoNoExiste = async (correo) => {


    const existeEmail = await Users.findOne({ where: { correo } });
    if (!existeEmail) {
        throw new Error(`El correo: ${correo}, no existe.`);
    }
}
const correoExiste = async (correo = '') => {


    const existeEmail = await Users.findOne({ where: { correo } });
    if (existeEmail) {
        throw new Error(`El correo: ${correo}, ya está registrado`);
    }
}

const existeUsuarioPorIdParaAsignar = async (id) => {
    if (id) {
        const existeUsuario = await Users.findOne({
            where: {
                id,
            }
        });
        if (!existeUsuario) {
            throw new Error(`El id (${id}) no existe `);
        }
    }
}
const existeCategoriaPorId = async (id) => {

    const existeCategoria = await Categories.findOne({
        where: {
            id,
        }
    });
    if (!existeCategoria) {
        throw new Error(`El id (${id}) no existe `);
    }
}

const existeProductoPorId = async (id) => {

    const existeProducto = await Products.findOne({
        where: {
            id,
        }
    });
    if (!existeProducto) {
        throw new Error(`El id (${id}) no existe `);
    }
}

export { existeUsuarioPorId, correoNoExiste, correoExiste, existeCategoriaPorId, existeUsuarioPorIdParaAsignar }