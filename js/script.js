const contenedorProducto = document.getElementById("productos-container");


function crearProductos(productos){
    productos.forEach(producto => {
        const nuevoElemento = document.createElement("div");
        nuevoElemento.classList = "text-bg-dark p-3 rounded text-center";
        nuevoElemento.innerHTML = `


            <img src=${producto.img} class="rounded-circle img-fluid img-thumbnail" style="width:200px;">
            
            <h3 class="text-light">${producto.nombre}</h3>
            <p class="text-light">$${producto.precio}</p>
           
            <div class=""mx-5 p-2">
            <button "type="button" class="btn btn-primary ">Agregar al carrito</button>
           </div>
            `
        contenedorProducto.appendChild(nuevoElemento);
        nuevoElemento.getElementsByTagName("button")[0].addEventListener("click", () => agregarCarrito(producto))
    });
}

crearProductos(productos);