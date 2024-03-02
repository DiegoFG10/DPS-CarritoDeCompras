const contenedorProducto = document.getElementById("productos-container");
const Unidades = document.getElementById("unidades");
const Precio = document.getElementById("precio");
const vacio = document.getElementById("vacio");
const total = document.getElementById("total");

function crearProductos() {
    contenedorProducto.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("productos"));
    console.log(productos);
    if (productos && productos.length > 0) {
        productos.forEach((producto) => {
            const nuevoElemento = document.createElement("div");
            nuevoElemento.classList = "nuevo-producto";
            nuevoElemento.innerHTML = `
            <img src=${producto.img}>
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <div>
            <button>-</button>
            <span class="cantidad" >${producto.cantidad}</span>
            <button>+</button>
            </div>
        `;
            contenedorProducto.appendChild(nuevoElemento);
            nuevoElemento.getElementsByTagName("button")[1].addEventListener("click", (e) => {
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = agregarCarrito(producto);
                actualizarTotal()
            });
            nuevoElemento.getElementsByTagName("button")[0].addEventListener("click", (e) => {
                restarCarrito(producto);
                crearProductos();
                actualizarTotal()
            });
        });
    }

}

crearProductos();
actualizarTotal()


function actualizarTotal(){
    const productos = JSON.parse(localStorage.getItem("productos"));
    let unidades = 0;
    let total = 0;
    if (productos && productos.length > 0){
        productos.forEach(producto =>{
            unidades += producto.cantidad;
            total += producto.precio * producto.cantidad;

        });
        Unidades.innerText = unidades;
        Precio.innerText = total;
    }
}
mensajeVacio();

function mensajeVacio(){
    const productos = JSON.parse(localStorage.getItem("productos"));
    vacio.classList.toggle("escondido", productos && productos.length > 0);
    total.classList.toggle("escondido", !(productos && productos.length > 0));
   
}

