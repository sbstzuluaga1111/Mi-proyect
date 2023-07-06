import getConnection from "../db/database";

const getClientes = async(req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT ClienteID,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax FROM clientes");
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}
const addCliente = async (req,res) =>{
    try {
        const {Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax } = req.body
        const category = {Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO clientes SET ?",category)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const getCliente = async (req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT ClienteID,Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax WHERE ClienteID = ?", id);
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

const delCliente = async (req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM clientes WHERE ClienteID = ?", id);
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

const updateCliente = async (req,res) =>{
    try {
        const {id} = req.params
        const {Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax } = req.body
        const category = {Compania,Contacto,Titulo,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono,Fax}
        const connection = await getConnection();
        const result = await connection.query("UPDATE clientes SET ? WHERE ClienteID = ?",[category,id])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const methodsHTTP = {
    getClientes,
    addCliente,
    getCliente,
    delCliente,
    updateCliente
}