import getConectar from "../db/database.js";

const getEmpleado = async (req, res) =>{
    try {
        const empleado = await getConectar();
        const result = await empleado.query("SELECT id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado FROM empleados");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getEmpleados = async (req, res) =>{
    try {
        const {id} = req.params;
        const empleado = await getConectar();
        const result = await empleado.query("SELECT id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado FROM empleados WHERE id_empleado = ?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const addEmpleados = async (req , res) =>{
    try {
        const {nombre_empleado,email_empleado,celular_empleado,password_empleado} = req.body;
        const empleado = {nombre_empleado, email_empleado, celular_empleado,password_empleado};
        const connection = await getConectar();
        const result = await connection.query("INSERT INTO empleados SET ?", empleado);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const deleteEmpleado = async (req, res) =>{
    try {
        const {id} = req.params;
        const empleado = await getConectar();
        const result = await empleado.query("DELETE FROM empleados WHERE id_empleado =?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateEmpleado = async (req, res) =>{
    try {
        const {id} = req.params;
        const {nombre_empleado,email_empleado,celular_empleado,password_empleado} = req.body;
        const employe = {nombre_empleado, email_empleado, celular_empleado, password_empleado};
        const empleado = await getConectar();
        const result = await empleado.query("UPDATE empleados SET ? WHERE id_empleado = ?", [employe,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTPS  = {
    getEmpleado,
    addEmpleados,
    getEmpleados,
    deleteEmpleado,
    updateEmpleado
}