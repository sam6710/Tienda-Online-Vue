<script setup>
</script>


<template>
    <div class="div_admin">
        <h1>Administración</h1>
        <div class="div_principal">
            <div class="div_form">
                <form>
                    <label for="title">Título</label>
                    <input type="text" id="title" name="title">
                    <label for="description">Descripción</label>
                    <input type="text" id="description" name="description">
                    <label for="price">Precio</label>
                    <input type="text" id="price" name="price">
                    <label for="image">Imagen</label>
                    <input type="text" id="image" name="image">
                    <label for="rating">Puntuación</label>
                    <input type="text" id="rating" name="rating">
                    <label for="count">Número de reviews</label>
                    <input type="text" id="count" name="count">
                    <label for="categoria">Categoria</label>
                    <select name="categoria" id="categoria">
                        <option value="women">Women</option>
                        <option value="men">Men</option>
                        <option value="jewelery">Jewelery</option>
                        <option value="accesories">Accesories</option>
                    </select>
                    <button id="btn_add">Añadir</button>
                </form>
            </div>
        </div>
    </div>
</template>


<style>
</style>