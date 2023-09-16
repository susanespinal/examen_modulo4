import { Users } from '../models/Users.js';
import { Categories } from '../models/Categories.js';
import { Products } from '../models/Products.js';


export async function getUsers(req, res) {
    try {
        const user = await Users.findAll({
            attributes: ['id', 'name', 'correo', 'contrasena', 'estado'],
        });
        res.json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
    //res.send('Saludos desde controlador getproject');
}

export async function createUsers(req, res) {
    const { name, correo, contrasena, estado } = req.body
    try {
        const newUser = await Users.create(
            {
                name: name,
                correo: correo,
                contrasena: contrasena,
                estado: estado
            },
            {
                fields: ['name', 'correo', 'contrasena', 'estado'],
            }
        );
        return res.json(newUser);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function getUser(req, res) {
    const { id } = req.params;
    try {
        const user = await Users.findOne(
            {
                where: { id },
            }
        );
        return res.json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function updateUsers(req, res) {
    const { id } = req.params;
    const { name, correo, contrasena, estado } = req.body

    try {
        const user = await Users.findByPk(id);
        user.name = name;
        user.correo = correo;
        user.contrasena = contrasena;
        user.estado = estado;

        await user.save();

        return res.json(user);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function deleteUsers(req, res) {
    const { id } = req.params;

    try {
        await Categories.destroy({ 
            where: { usuarioId: id },
        });

        await Products.destroy({ 
            where: { usuarioId: id },
        });

        await Users.destroy({ 
            where: { id },
        });

        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function getUserCategories(req, res) {
    const { id } = req.params;

    try {
        const task = await Task.findAll({
            attributes: ['id', 'projectId', 'name', 'done'],
            where: { projectId: id },
        })

        return res.json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function getUsersCategories(req, res) {
    try {
        const projects = await Project.findAll({
            attributes: ['id', 'name', 'priority', 'description'],
            include: [
                {
                    model: Task,
                    attributes: ['id', 'name'],
                    required: true,
                }
            ]
        })
        res.json(projects);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
