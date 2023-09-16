import { Products } from "../models/Products.js";

export async function getProducts(req, res) {
    try {
        const product = await Products.findAll({
            attributes: ['id', 'usuarioId', 'categoriaId', 'name', 'precio_unitario', 'estado'],
            order: [['id', 'DESC']]
        });
        res.json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function getProduct(req, res) {
    const { id } = req.params;
    try {
        const product = await Products.findOne(
            {
                where: { id },
            }
        );
        return res.json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function createProducts(req, res) {
    const { name, precio_unitario, estado, usuarioId, categoriaId } = req.body
    try {
        const newProduct = await Products.create({
            usuarioId,
            categoriaId,
            name,
            precio_unitario,
            estado
        })
        res.json(newProduct);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function updateProducts(req, res) {
    const { id } = req.params;
    try {
        const product = await Products.findOne({
            attributes: ['name', 'usuarioId', 'categoriaId', 'precio_unitario', 'estado', 'id'],
            where: { id }
        })
        task.set(req.body);
        await product.save();
        return res.json(product);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

export async function deleteProducts(req, res) {
    const { id } = req.params;
    try {
        await Products.destroy({ //elimina todas la categorias
            where: { id },
        });
        return res.sendStatus(204);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}
