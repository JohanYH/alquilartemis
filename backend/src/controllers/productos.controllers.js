import getConectar from "./../db/database.js";

const getProductos = async (req, res) =>{
    try {
        const producto = await getConectar();
        const result = await producto.query("SELECT id_producto, nombre_producto, precio_x_dia, stock_producto, categorias.nombre_categoria FROM productos INNER JOIN categorias ON productos.categoria_producto = categorias.id_categoria");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const getProducto = async (req, res) =>{
    try {
        const {id} = req.params;
        const producto = await getConectar();
        const result = await producto.query("SELECT id_producto, nombre_producto, precio_x_dia, stock_producto, categoria_producto FROM productos WHERE id_producto = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addProductos = async (req, res) =>{
    try {
        const {nombre_producto, precio_x_dia, stock_producto ,categoria_producto} = req.body;
        const producto = {nombre_producto, precio_x_dia,stock_producto,categoria_producto};
        const connection = await getConectar();
        const result = await connection.query("INSERT INTO productos SET ?", producto);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteProductos = async (req, res) =>{
    try {
        const {id} = req.params;
        const producto = await getConectar();
        const result = await producto.query("DELETE FROM productos WHERE id_producto = ?", id)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateProducto = async (req, res) =>{
    try {
        const {id} = req.params;
        const {nombre_producto,precio_x_dia,stock_producto,categoria_producto} = req.body;
        const product = {nombre_producto, precio_x_dia,stock_producto,categoria_producto}
        const producto = await getConectar();
        const result = await producto.query("UPDATE productos SET ? WHERE id_producto = ?", [product,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTPS = {
    getProductos,
    addProductos,
    getProducto,
    deleteProductos,
    updateProducto
}