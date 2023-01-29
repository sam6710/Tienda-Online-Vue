<script setup>
    // import { db } from '../firebase';
    window.onload = function(){

        document.getElementById("logo").addEventListener("click", function(){
            montarInicio();
        });
        document.getElementById("mujer").addEventListener("click", function(){
            // pedirProductos();
        });
        document.getElementById("hombre").addEventListener("click", function(){
            // pedirProductos();
        });
        document.getElementById("joyeria").addEventListener("click", function(){
            // pedirProductos();
        });
        document.getElementById("accesorios").addEventListener("click", function(){
            // pedirProductos();
        });
        document.getElementById("login").addEventListener("click", function(){
            mostrarLogin();
        });
        document.getElementById("carrito").addEventListener("click", function(){
            mostrarCarrito();
        });

        // montarInicio();


        // var productos = ref([]);
        // db.collection("Productos").get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         let producto = {
        //             doc_id: doc.id,
        //             id: doc.data().id,
        //             title: doc.data().title,
        //             price: doc.data().price,
        //             image: doc.data().image,
        //             category: doc.data().category,
        //             rating: doc.data().rating,
        //             count: doc.data().count
        //         }
        //         productos.push(producto);
        //         // console.log(doc.data())
        //         console.log(productos)
        //     })
        // })
    }
</script>


<template>
    <nav>
        <router-link to="/"><img id="logo" src="../../imagenes/logo.jpg" alt="logo"></router-link>
        <router-link to="/login"><img id="login" src="../../imagenes/login.png" alt="login"></router-link>
        <router-link to="/carrito"><img id="carrito" src="../../imagenes/carrito.png" alt="carrito"></router-link>
        <ul id="menu">
            <li id="mujer"><span><router-link to="/mujer"><a href="">Mujer</a></router-link></span></li>
            <li id="hombre"><span><router-link to="/hombre"><a href="">Hombre</a></router-link></span></li>
            <li id="joyeria"><span><router-link to="/joyeria"><a href="">Joyería</a></router-link></span></li>
            <li id="accesorios"><span><router-link to="/accesorios"><a href="">Accesorios</a></router-link></span></li>
        </ul>
        <!-- <router-link to="/admin"><span>Admin</span></router-link> -->
    </nav>
</template>


<style>
</style>