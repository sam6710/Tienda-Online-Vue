<script setup>
import productos from "./header.vue"
</script>


<template>
    <div class="div_principal">
        <div class="div_orden">
            <select class="select" name="" id="">
                <option value=''>Ordenar por</option>
                <option value='asc'>Ascendente</option>
                <option value='desc'>Descendente</option>
                <button class="button">Ordenar</button>
            </select>
            <br><br>
            <button @click="pedirProductos">Aaaaaa</button>
            <br><br>
        </div>
        <div class="div_producto" v-for="producto in productos">
            <input id='product_id' type='hidden' value="{{ producto.id }}">
            <h3>{{ producto.title }}</h3>
            <!-- <img src={{ producto.image }} alt="imagen del producto"> -->
            <p>{{ producto.price }}</p>
        </div>
    </div>
</template>


<style>
</style>