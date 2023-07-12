const url = 'http://localhost:8000/api/proveedores'
const tbody = document.getElementById('llenar-categorias')

const cargarTabla = async () =>{
    try {
        const fetish = await fetch(url)
        const respuesta = await fetish.json()
        console.log(respuesta);
        respuesta.forEach(element => {
            const filaNuewva = document.createElement('tr')
            const {ProveedorID,Compania,Direccion,Pais} = element
            filaNuewva.innerHTML = `
                <td>${ProveedorID}</td>
                <td>${Compania}</td>
                <td>${Direccion}</td>
                <td>${Pais}</td>
                <td>
                    <button id="${ProveedorID}" class="dell btn btn-danger">Eliminar</button>
                </td>
                <td>
                    <button id="${ProveedorID}" class="updt btn btn-warning">Actaulizar</button>
                </td>
                <td>
                    <button id="${ProveedorID}" class="dett btn btn-primary">Detalles</button>
                </td>
            `
            tbody.appendChild(filaNuewva)
        });
    } catch (error) {
        console.log(error);
    }
    
}

document.addEventListener("DOMContentLoaded",cargarTabla)