import getConectar from "./../db/database.js";

const getCategorias = async (req, res) => {
    try {
        const categoria = await getConectar();
        const result = await categoria.query("SELECT id_categoria, nombre_categoria, descripcion_categoria, img_categoria FROM categorias");
        console.log(result);
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const getCategoria = async (req, res) => {
    try {
     const {id} = req.params;
     const connection = await getConectar();
     const result = await connection.query("SELECT id_categoria,nombre_categoria, descripcion_categoria,img_categoria FROM categorias WHERE id_categoria =?", id);
     res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const addCategorias = async (req, res) => {
    try {
        const {nombre_categoria,descripcion_categoria,img_categoria} = req.body;
        const category = {nombre_categoria,descripcion_categoria,img_categoria};
        const connection = await getConectar();
        const result = await connection.query("INSERT INTO categorias SET ?", category);
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

const deleteCategorias = async (req, res) =>{
    try {
        const {id} = req.params;
        const connection = await getConectar();
        const result = await connection.query("DELETE FROM categorias WHERE id_categoria = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const updateCategoria = async (req,res) =>{
    try {
        const {id} =req.params
        const {nombre_categoria,descripcion_categoria,img_categoria} = req.body;
        const category = {
            nombre_categoria, descripcion_categoria,img_categoria
        }        
        const connection = await getConectar();
        const result = await connection.query("UPDATE categorias SET ? WHERE id_categoria = ?", [category, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}



export const  methodsHTTPS = {
    getCategorias,
    addCategorias,
    getCategoria,
    deleteCategorias,
    updateCategoria
}