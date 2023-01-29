<script setup>
// import { querySnapshot } from '../firebase';
// import { ref } from 'vue';
// import { doc } from '@firebase/firestore';


// function pedirProductos(){
//     var productos = ref([]);
//     querySnapshot.forEach((doc) => {
//         console.log(doc.id, " => ", doc.data());
        
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
//     });
//     console.log(productos)
//     console.log(doc.data())
// }
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