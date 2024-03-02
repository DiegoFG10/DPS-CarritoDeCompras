const contenedorProducto = document.getElementById("productos-container");


function crearProductos(productos){
    productos.forEach(producto => {
        const nuevoElemento = document.createElement("div");
        nuevoElemento.classList = "nuevo-producto";
        nuevoElemento.innerHTML = `
            <img src=${producto.img}>
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <button>Agregar al carrito</button>
        `
        contenedorProducto.appendChild(nuevoElemento);
        nuevoElemento.getElementsByTagName("button")[0].addEventListener("click", () => agregarCarrito(producto))
    });
}

crearProductos(productos);