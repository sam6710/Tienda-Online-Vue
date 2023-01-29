<script setup>
import { routerKey } from 'vue-router';
// import { useRouter } from 'vue-router';

// const router = useRouter();

// function Producto(){
//     router.push(`/product/${$id}`);
// };

const emit = defineEmits(['eventoBtnCarrito']);

function lanzarEventoBtnCarrito(){
    emit('eventoBtnCarrito', texto)
}
</script>


<template>
    <div class="div_principal2">
        <div class="div_producto">
            <h3>" + producto.title + "</h3>
            <img src='" + producto.image + "'>
            <p>" + producto.price + "$</p>"
        </div>
        <div class="div_info">
            <p id='descripcion'>" + producto.description + "</p>
            <p id='price'>" + producto.price + "€</p>
            <span id='rating'>Puntuación: " + producto.rating.rate + " en </span>
            <span id='reviews'>" + producto.rating.count + "reviews.</span>
            <span id='talla'>Talla:</span>
            <select>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
            </select>
            <button id='btn_add_carrito' @click="lanzarEventoBtnCarrito">Añadir al carrito</button>
        </div>
    </div>
</template>


<style>
    .div_producto{
        border: none;
        border-radius: 0;
        background-color: rgb(240, 240, 240);
    }
    .div_producto p{
        display: none;
    }
    .div_principal2{
        display: flex;
    }
</style>