import getConectar from "./../db/database.js";


//1. Esta funcion llama a todo la informacion de la tabla
const getCategorias = async (req, res) => {
    try {
        const categoria = await getConectar();
        const result = await categoria.query("SELECT * FROM categorias");
        console.log(result);
        res.json(result); 
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

//2. Esta funcion muestra la informacion de la tabla, pero atravez de una ID especifico
const getCategoria = async (req, res) => {
    try {
     const {id} = req.params;
     const connection = await getConectar();
     const result = await connection.query("SELECT * FROM categorias WHERE id_categoria =?", id);
     res.json(result);   
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}


//3. Esta funcion añade datos a la tabla
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


//4. Esta funcion borra datos de la tabla, pero atravez de un ID especifico
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


//5.Esta funcion modifica la informacion que contiene un dato de una tabla
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


//6. Este metodo permite exportar un objeto las funciones  
export const  methodsHTTPS = {
    getCategorias,
    addCategorias,
    getCategoria,
    deleteCategorias,
    updateCategoria
}