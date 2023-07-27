import getConnection from "./../db/database.js";

const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categorias");
        console.log(result);
        res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addCategories = async (req, res) => {
    try {
        const {nombre_categoria, descripcion_categoria, img_categoria} = req.body;
        const category = {
            nombre_categoria, 
            descripcion_categoria, 
            img_categoria
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO categorias SET ?", category);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getCategoriaById = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM categorias WHERE id_categoria = ?", id);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);
    }
}

const deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM categorias WHERE id_categoria = ?", id);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);
    }
}

const updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre_categoria, descripcion_categoria, img_categoria } = req.body;
        const category = {
            nombre_categoria, 
            descripcion_categoria, 
            img_categoria
        }
        const connection = await getConnection();
        const result = await connection.query("UPDATE categorias SET nombre_categoria = ?, descripcion_categoria = ?, img_categoria = ? WHERE id_categoria = ?", [category.nombre_categoria, category.descripcion_categoria, category.img_categoria, id]);
        res.json(result);   
    } catch (error) {
        error.status(500);    
        error.send(error.message); 
    }
}

export const methodsHTTP = {
    getCategorias,
    addCategories,
    getCategoriaById,
    deleteCategoria,
    updateCategoria
}