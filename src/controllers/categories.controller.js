import { Categories } from "../models/Categories.js";

export async function getCategories(req, res) {
    try {
        const categorie = await Categories.findAll({
            attributes: ['id', 'usuarioId', 'name'],
            order: [['id', 'DESC']]
        });
        res.json(categorie);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function getCategory(req, res) {
    const { id } = req.params;
    try {
        const categorie = await categorie.findOne(
            {
                where: { id },
            }
        );
        return res.json(categorie);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function createCategories(req, res) {
    const { name, done, usuarioId } = req.body
    try {
        const newCategorie = await Categories.create({
            usuarioId,
            name,
        })
        res.json(newCategorie);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function updateCategories(req, res) {
    const { id } = req.params;
    try {
        const categorie = await Categories.findOne({
            attributes:['name','usuarioId','id'],
            where:{id}
        })
        task.set(req.body);
        await categorie.save();
        return res.json(categorie);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function deleteCategories(req, res) {
    const { id } = req.params;
    try {
        await Categories.destroy({ //elimina todas la categorias
            where: { id },
        });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
