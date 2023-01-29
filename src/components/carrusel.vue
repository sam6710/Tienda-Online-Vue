<script setup>
const TIEMPO_INTERVALO_MILESIMAS_SEG = 4000;

const IMAGENES = [
    "../../imagenes/carrusel/nieve.jpg",
    "../../imagenes/carrusel/columna.jpg",
    "../../imagenes/carrusel/percha.jpg",
    "../../imagenes/carrusel/colores.jpg",
    "../../imagenes/carrusel/sol.jpg",
];

window.onload = function(){
    montarInicio();
    playIntervalo();
}

let posicionActual = 0;

function pasarFoto(){
    if (posicionActual >= IMAGENES.length - 1){
        posicionActual = 0;
    }
    else{
        posicionActual++;
    }
    renderizarImagen();
}

function renderizarImagen(){
    let i = 0;
    for (i = 0; i < IMAGENES.length; i++){
        var img_carrusel = document.getElementById("imagen_carrusel");
        img_carrusel.src = IMAGENES[posicionActual];
    }
}

function playIntervalo(){
    let intervalo;
    intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
}

// Inicio
function montarInicio(){
    $("main").html("<section id='hero'><div id='hero_img'><img src='./imagenes/good vibes.jpg' alt='good vibes' id='vibes'><img src='./imagenes/capucha.jpg' alt='capucha' id='capucha'><img src='./imagenes/flores.jpg' alt='flores' id='flores'></div><div id='hero_cont'><h2 style='--ancho:41%'>Sammy´s Shop</h2><p>Bienvenidos a Sammy´s Shop, tu tienda de ropa favorita, donde puedes encontrar todo tipo de productos.</p></div></section><section id='carrusel'><img src='./imagenes/logo_c.PNG' id='logo_carrusel' alt=''><div id='img_carrusel'><img src='./imagenes/carrusel/nieve.jpg' alt='imagen_carrusel' id='imagen_carrusel'></div></section><section id='siguenos'><div class='contenedor_red' id='twitter'><a href='https://twitter.com' target='_blank'><img src='./imagenes/twitter.png' alt='Twitter'></a><span>Twiiter</span></div><div class='contenedor_red' id='instagram'><a href='https://instagram.com' target='_blank'><img src='./imagenes/instagram.png' alt='Instagram'></a><span>Instagram</span></div><div class='contenedor_red' id='github'><a href='https://github.com/sam6710' target='_blank'><img src='./imagenes/github.png' alt='GitHub'></a><span>GitHub</span></div><div class='contenedor_red' id='yt'><a href='https://www.youtube.com' target='_blank'><img src='./imagenes/yt.png' alt='YT'></a><span id='span_yt'>YouTube</span></div><p id='p_sig'>SÍGUENOS</p><img src='./imagenes/columna2.jpg' alt='columna' id='columna_sig'><img src='./imagenes/escultura.jpg' alt='escultura' id='escultura_sig'></section>");
    $("main").css("display", "grid");
}
</script>


<template>
    <section id="carrusel">
        <img src="../../imagenes/logo_c.PNG" id="logo_carrusel" alt="">
        <div id="img_carrusel">
            <img src="../../imagenes/carrusel/nieve.jpg" alt="imagen_carrusel" id="imagen_carrusel">
        </div>
    </section>
</template>


<style>
</style>