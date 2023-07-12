const url = 'http://localhost:8000/api/categorias'
const tbody = document.getElementById('llenar-categorias')

const cargarTabla = async () =>{
    try {
        const fetish = await fetch(url)
        const respuesta = await fetish.json()
        console.log(respuesta);
        respuesta.forEach(element => {
            const filaNuewva = document.createElement('tr')
            const {CategoriaID,CategoriaNombre,Descripcion,Imagen} = element
            filaNuewva.innerHTML = `
                <td>${CategoriaID}</td>
                <td>${CategoriaNombre}</td>
                <td>${Descripcion}</td>
                <td>${Imagen}</td>
                <td>
                    <button id="${CategoriaID}" class="dell btn btn-danger">Eliminar</button>
                </td>
                <td>
                    <button id="${CategoriaID}" class="updt btn btn-warning">Actaulizar</button>
                </td>
                <td>
                    <button id="${CategoriaID}" class="dett btn btn-primary">Detalles</button>
                </td>
            `
            tbody.appendChild(filaNuewva)
        });
    } catch (error) {
        console.log(error);
    }
    
}

document.addEventListener("DOMContentLoaded",cargarTabla)