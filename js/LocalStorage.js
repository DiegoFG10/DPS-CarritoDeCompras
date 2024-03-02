
function agregarCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("productos"));
    console.log(memoria);
    let cuenta = 0;
    if(!memoria){
        const nuevoProducto = getNuevoProducto(producto);
        localStorage.setItem("productos", JSON.stringify([nuevoProducto]))
        cuenta = 1;
    } 
    else {
        const indiceProducto = memoria.findIndex(Producto => Producto.id == producto.id);
        console.log(indiceProducto)
        const nuevaMemoria = memoria
        if(indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProducto(producto))
            cuenta = 1;
        } 
        else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta= nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("productos", JSON.stringify(nuevaMemoria));
    }
    actualizarCarrito();
    return cuenta;
}

function restarCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("productos"));
    const indiceProducto = memoria.findIndex(Producto => Producto.id == producto.id);
    if(memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto, 1);
    } else {
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("productos", JSON.stringify(memoria));
    actualizarCarrito();
}

/*agarra un producto le agraga 1 y lo devuelve*/
function getNuevoProducto(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cuentaCarrito = document.getElementById("C-carrito");

function actualizarCarrito(){
    const memoria = JSON.parse(localStorage.getItem("productos"));
    const cuenta = memoria.reduce((acum, current) => acum+current.cantidad, 0);
    cuentaCarrito.innerText = cuenta;
}

actualizarCarrito();

