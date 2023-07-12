import getConnection from "../db/database.js";

const getProveedores = async(req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT ProveedorID,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax,Pagina FROM Proveedores");
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}
const addProveedores = async (req,res) =>{
    try {
        const {Compania,Direccion,Pais } = req.body
        const category = {Compania,Direccion,Pais}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO Proveedores SET ?",category)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const getProveedor = async (req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT ProveedorID,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax = ?", id);
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

const delProveedores = async (req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Proveedores WHERE ProveedorID = ?", id);
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

const updateProveedores = async (req,res) =>{
    try {
        const {id} = req.params
        const {ProveedorID,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax } = req.body
        const category = {ProveedorID,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax}
        const connection = await getConnection();
        const result = await connection.query("UPDATE Proveedores SET ? WHERE ProveedorID = ?",[category,id])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const methodsHTTP = {
    getProveedores,
    addProveedores,
    getProveedor,
    delProveedores,
    updateProveedores
}