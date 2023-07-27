import getConnection from "./../db/database.js";

const getConstructoras = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_constructora, nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto FROM constructoras");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addConstructora = async (req, res) => {
    try {
        const {nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto} = req.body;
        const constructora = {
            nombre_constructora, 
            nit_constructora, 
            nombre_representante, 
            email_contacto, 
            telefono_contacto
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO constructoras SET ?", constructora);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getConstructuraById = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM constructoras WHERE id_constructora = ?", id);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);
    }
}

const deleteConstructora = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result =  await connection.query("DELETE FROM constructoras WHERE id_constructora = ?", id);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);
    }
}

const updateConstructora = async (req, res) => {
    try {
        const { id } = req.params;
        const {nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto} = req.body;
        const constructora = {
            nombre_constructora, 
            nit_constructora, 
            nombre_representante, 
            email_contacto, 
            telefono_contacto
        }
        const connection = await getConnection();
        const result = await connection.query("UPDATE constructoras SET nombre_constructora = ?, nit_constructora = ?, nombre_representante = ?, email_contacto = ?, telefono_contacto = ? WHERE id_constructora = ?", [constructora.nombre_constructora, constructora.nit_constructora, constructora.nombre_representante, constructora.email_contacto, constructora.telefono_contacto, id]);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);
    }
}

export const methodsHTTP = {
    getConstructoras,
    addConstructora,
    getConstructuraById,
    deleteConstructora,
    updateConstructora
}