import getConnection from "./../db/database.js";

const getProductos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_producto, nombre_producto, precio_x_dia, stock_producto, categoria_producto FROM productos");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addProductos = async (req, res) => {
    try {
        const {nombre_producto, precio_x_dia, stock_producto, categoria_producto} = req.body;
        const producto = {
            nombre_producto, 
            precio_x_dia, 
            stock_producto, 
            categoria_producto
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO productos SET ?", producto);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);
    }
}

const getProductoById = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM productos WHERE id_producto = ?", id);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);
    }
}

const deleteProducto = async (req, res) =>{
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM productos WHERE id_producto = ?", id);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);
    }
}

const updateProducto = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre_producto, precio_x_dia, stock_producto, categoria_producto } = req.body;
      const producto = {
        nombre_producto,
        precio_x_dia,
        stock_producto,
        categoria_producto
      };
      const connection = await getConnection();
      const result = await connection.query("UPDATE productos SET nombre_producto = ?, precio_x_dia = ?, stock_producto = ?, categoria_producto = ? WHERE id_producto = ?", [producto.nombre_producto, producto.precio_x_dia, producto.stock_producto, producto.categoria_producto, id]);
      res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);
    }
}

export const methodsHTTP = {
    getProductos,
    addProductos,
    getProductoById,
    deleteProducto,
    updateProducto
}