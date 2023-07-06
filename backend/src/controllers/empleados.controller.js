import getConnection from "../db/database";

const getEmpleados = async(req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT EmpleadoID,Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono, Extension,Foto,Notas,Jefe,RutaFoto FROM empleados");
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}
const addEmpleados = async (req,res) =>{
    try {
        const {Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono, Extension,Foto,Notas,Jefe,RutaFoto } = req.body
        const category = {Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono, Extension,Foto,Notas,Jefe,RutaFoto}
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO empleados SET ?",category)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const getEmpleado = async (req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("SELECT EmpleadoID,Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono, Extension,Foto,Notas,Jefe,RutaFoto WHERE EmpleadoID = ?", id);
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

const delEmpleados = async (req,res)=>{
    try {
        console.log(req.params);
        const {id} = req.params
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM empleados WHERE EmpleadoID = ?", id);
        res.json(result)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    
}

const updateEmpleados = async (req,res) =>{
    try {
        const {id} = req.params
        const {Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono, Extension,Foto,Notas,Jefe,RutaFoto  } = req.body
        const category = {Apellido,Nombre,Titulo,TituloCortesia,FechaNacimiento,FechaContratacion,Direccion,Ciudad,Regiones,CodigoPostal,Pais,Telefono, Extension,Foto,Notas,Jefe,RutaFoto }
        const connection = await getConnection();
        const result = await connection.query("UPDATE empleados SET ? WHERE EmpleadoID = ?",[category,id])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export const methodsHTTP = {
    getEmpleados,
    addEmpleados,
    getEmpleado,
    delEmpleados,
    updateEmpleados
}