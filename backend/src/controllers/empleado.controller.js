import getConnection from "./../db/database.js";

const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado FROM empleados");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addEmpleados = async (req, res) => {
    try {
        const {nombre_empleado, email_empleado, celular_empleado, password_empleado} = req.body;
        const employee = {
            nombre_empleado, 
            email_empleado, 
            celular_empleado, 
            password_empleado
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO empleados SET ?", employee);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);
    }
}

const getEmpleadoById = async  (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM empleados WHERE id_empleado = ?", id);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);    
    }
}

const deleteEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM empleados WHERE id_empleado = ?", id);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message); 
    }
}

const updateEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const {nombre_empleado, email_empleado, celular_empleado, password_empleado} = req.body;
        const employee = {
            nombre_empleado, 
            email_empleado, 
            celular_empleado, 
            password_empleado
        }
        const connection = await getConnection();
        const result = await connection.query("UPDATE empleados SET nombre_empleado = ?, email_empleado = ?, celular_empleado = ?, password_empleado = ? WHERE id_empleado = ?", [employee.nombre_empleado, employee.email_empleado, employee.celular_empleado, employee.password_empleado, id]);
        res.json(result);
    } catch (error) {
        error.status(500);
        error.send(error.message);
    }
}

export const methodsHTTP = {
    getEmpleados, 
    addEmpleados,
    getEmpleadoById,
    deleteEmpleado,
    updateEmpleado
}