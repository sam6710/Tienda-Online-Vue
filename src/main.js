import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import mainvue from './components/main.vue'
import mujer from './components/mujer.vue'
import hombre from './components/hombre.vue'
import joyeria from './components/joyeria.vue'
import accesorios from './components/accesorios.vue'
import login from './components/login.vue'
import carrito from './components/carrito.vue'
// import admin from './components/admin.vue'
import { createRouter, createWebHistory } from 'vue-router'
// import { onAuthStateChanged } from 'firebase/auth'
// import { auth } from './firebase.js'
// import { db } from './firebase'
// import { querySnapshot } from './firebase'


const miapp = createApp(App)

// var estaAutenticado = false;
// onAuthStateChanged(auth, (user) => {
//     if(user){
//         estaAutenticado = true;
//     }
//     else{
//         estaAutenticado = false;
//         router.push("/")
//     }
// })

const routes = [
    {
        path: '/',
        component: mainvue
    },
    { 
        path: '/mujer', 
        component: mujer
    },
    { 
        path: '/hombre', 
        component: hombre
    },
    { 
        path: '/joyeria', 
        component: joyeria
    },
    { 
        path: '/accesorios', 
        component: accesorios
    },
    { 
        path: '/login', 
        component: login
    },
    { 
        path: '/carrito', 
        component: carrito
    },
    // { 
    //     path: '/admin', 
    //     component: admin,
    //     beforeEnter: (to, from) => {
    //         if(estaAutenticado){
    //             return true;
    //         }
    //         else{
    //             return '/login';
    //         }
    //     },
    // },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


miapp.use(router)
miapp.mount('#app')
