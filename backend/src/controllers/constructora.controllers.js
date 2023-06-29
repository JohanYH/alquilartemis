import getConectar from "./../db/database.js";

const getConstructora = async (req, res) => {
    try {
        const constructora = await getConectar();
        const results = await constructora.query("SELECT id_constructora, nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto FROM constructoras");
        res.json(results);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getConstructoras = async (req, res)=>{
    try {
        const {id} = req.params;
        const connection = await getConectar();
        const result = await connection.query("SELECT id_constructora, nit_constructora,nombre_representante,email_contacto,telefono_contacto FROM constructoras WHERE id_constructora = ?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const addConstructora = async (req, res) =>{
    try {
        const {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto}= req.body;
        const constructora = {nombre_constructora, nit_constructora, nombre_representante, email_contacto,telefono_contacto};
        const connection = await getConectar();
        const result = await connection.query("INSERT INTO constructoras SET ?", constructora);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteConstructoras = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection =await getConectar();
        const result = await connection.query("DELETE FROM constructoras WHERE id_constructora = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const updateConstructora = async (req, res) =>{
    try {
        const {id} = req.params;
        const {nombre_constructora,nit_constructora,nombre_representante,email_contacto, telefono_contacto} = req.body;
        const constructora = {nombre_constructora,nit_constructora, nombre_representante,email_contacto,telefono_contacto}
        const connection = await getConectar();
        const result = await connection.query("UPDATE constructoras SET ? WHERE id_constructora = ?", [constructora,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}



export const methodsHTTPS = {
    getConstructora,
    addConstructora,
    getConstructoras,
    deleteConstructoras,
    updateConstructora
}