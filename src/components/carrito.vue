<script setup>
function eventoBtnCarrito(producto){
    $("#btn_add_carrito").on("click", function(){
        añadirProducto(producto);
    });
}

function añadirProducto(producto){
    if(localStorage.carrito != null){
        var carrito = JSON.parse(localStorage.getItem("carrito"))
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
    else{
        var carrito = [];
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}

function mostrarCarrito(){
    $("main").html("");
    let div_principal = document.createElement("div");
    div_principal.className = "div_principal";
    $("main").append(div_principal);
    let h2 = document.createElement("h2");
    h2.innerHTML = "Carrito";
    div_principal.append(h2);
    let div_carrito = document.createElement("div");
    div_carrito.className = "div_carrito";
    div_principal.append(div_carrito);
    if(localStorage.carrito != null){
        let carrito = JSON.parse(localStorage.getItem("carrito"));
        let ul = document.createElement("ul");
        var total = 0;
        carrito.forEach(producto => {
            let li = document.createElement("li");
            li.innerHTML = "<img src=" + producto.image + "><span>" + producto.price + "₤</span><i class='fa fa-trash'></i><h3>" + producto.title + "</h3>";
            total += producto.price;
            ul.append(li);
            div_carrito.append(ul);
        });
        let div_compra = document.createElement("div");
        div_compra.className = "div_compra"
        div_compra.innerHTML = "<p id='total'>Total:" + total + "¥</p><button id='btn_comprar'>Comprar</button>";
        div_carrito.append(div_compra);
    }
    else{
        let div_vacio = document.createElement("div");
        div_vacio.className = "div_vacio";
        div_vacio.innerHTML = "<h3>El carrito está vacío</h3>";
        div_carrito.append(div_vacio);
    }
    $("main").css("display", "flex");
    $(".div_principal").css("width", "100%");
    $(".div_principal").css("display", "block");

    eventoEliminarProducto();
    eventoBtnComprar();
}

function eventoEliminarProducto(){
    $(".fa-trash").on("click", function(){
        eliminarProducto(this);
    });
}

function eliminarProducto(elemento){
    let carrito = JSON.parse(localStorage.getItem("carrito"));
    let indice = $(elemento).parent().index();
    carrito.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function eventoBtnComprar(){
    $("#btn_comprar").on("click", function(){
        mostrarCompra();
    });
}

function mostrarCompra(){
    $("main").html("");
    let h1 = document.createElement("h1");
    h1.innerHTML = "¡¡¡Simulación de compra realizada!!!";
    $("main").append(h1);
    $("h1").css("position", "relative");
    $("h1").css("top", "12%");
    $("h1").css("left", "33%");
}

</script>


<template>
    <div class="div_principal">
        <h2>Carrito</h2>
        <div class="div_carrito">
            <ul>
                <li>
                    <img src=" + producto.image + ">
                    <span>" + producto.price + "₤</span>
                    <i class='fa fa-trash'></i>
                    <h3>" + producto.title + "</h3>
                </li>
            </ul>
            <div class="div_compra">
                <p id='total'>Total:" + total + "¥</p>
                <button id='btn_comprar'>Comprar</button>
            </div>
        </div>
    </div>
</template>


<style>
</style>