import { obtenerCategorias, nuevaCategoria, deleteCategoria } from './API.js';

document.addEventListener("DOMContentLoaded", () => {
    showCategorias();
});
const lista = document.querySelector('.listado-estudiantes');
lista.addEventListener('click', confirmDelete);

/* LISTAR CATEGORIAS  - CRUD (R) */
async function showCategorias(){
    const categorias = await obtenerCategorias();
    console.log(categorias);
    const contenedor = document.querySelector('#tablaCategorias');
    categorias.forEach(categoria => {
        const {id_categoria, nombre_categoria, descripcion_categoria, img_categoria} = categoria;
        const row = document.createElement('tr');
        row.innerHTML = 
        `
        <td>${id_categoria}</td>
        <td>${nombre_categoria}</td>
        <td>${descripcion_categoria}</td>
        <td>
            <img src="./img/${img_categoria}" width="200px">
        </td>
        <td>
            <button type="button" data-categoria="${id_categoria}" class="update btn btn-warning">UPDATE</button>
        </td>
        <td>
            <button type="button" data-categoria="${id_categoria}" class="delete btn btn-danger">DELETE</button>
        </td>
        `;
        contenedor.appendChild(row);
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */
const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
    console.log(5);
    validateCategory(e);
});

function validateCategory(e){
    e.preventDefault();
    const nombre_categoria = document.querySelector('#nombre_categoria').value;
    const descripcion_categoria = document.querySelector('#descripcion_categoria').value;
    const img_categoria = document.querySelector('#img_categoria').files[0].name;
    const newCategoria = {
        nombre_categoria,
        descripcion_categoria,
        img_categoria
    }
    console.log(img_categoria);
    console.log(newCategoria);

    if(validate(newCategoria)){
        alert('Todos los campos son obligatorios.');
        return;
    }
    nuevaCategoria(newCategoria);
}

function validate(obj){
    return !Object.values(obj).every(element => element !== '');
}

/* ELIMINAR CATEGORIA  - CRUD (D) */
function confirmDelete(e){
    if(e.target.classList.contains('delete')){
        const categoriaId = Number(e.target.dataset.categoria);
        const confirmar = confirm('¿Desea eliminar la categoría seleccionada?');
        if(confirmar){
            deleteCategoria(categoriaId);
        }
    }
}

//EDITAR CATEGORIA - CRUD (U)
export const updateCategoria = async (categoria, id) => {
    
}