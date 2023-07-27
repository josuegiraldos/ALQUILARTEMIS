const Categorias = "http://localhost:5000/api/categorias";

export const obtenerCategorias = async () => {
    try {
        const result = await fetch(Categorias);
        const arrayCategorias = result.json();
        return arrayCategorias;
    } catch (error) {
        console.log(error);
    }
};


export const nuevaCategoria = async (categoria) => {
    try {
        await fetch(Categorias, {
            method: "POST",
            body: JSON.stringify(categoria),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}

export const deleteCategoria = async (id) => {
    try {
        await fetch(`${Categorias}/${id}`, {
            method: "DELETE"
        })
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    }
}


export const deleteCategory = async (id) => {
  
};



export const obtenerCategory = async (id) => {
 
};



export const editarCategory = async (category) => {
 
};





