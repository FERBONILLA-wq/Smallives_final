import Product from "../model/product.models.mjs";

export const register = async (req, res) => {
    try {
        const { fechaSeleccionada, descripcion } = req.body;
        const nuevoProducto = new Product({
            fechaSeleccionada,
            descripcion,
        });
        await nuevoProducto.save();
        res.status(201).json({ message: "Producto registrado con éxito" });
    } catch (error) {
        console.error("Error al registrar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const addFechaCreacion = async (req, res) => {
    try {
        const { codigo, fechaCreacion } = req.body;
        await Product.updateOne({ codigo }, { fechaCreacion });
        res.status(201).json({ message: "Fecha de creación agregada con éxito" });
    } catch (error) {
        console.error("Error al agregar la fecha de creación:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const update = async (req, res) => {
    try {
        const { codigo, descripcion, nombre } = req.body;
        await Product.updateOne({ codigo }, { descripcion, nombre });
        res.status(201).json({ message: "Producto actualizado con éxito" });
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const { codigo, fechaEliminacion } = req.body;
        await Product.updateOne({ codigo }, { estatus: false, fechaEliminacion });
        res.status(201).json({ message: "Producto eliminado con éxito" });
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
}

export const login = (_, res) => res.send("product login");
