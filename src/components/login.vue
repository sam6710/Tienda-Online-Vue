<script setup>
import { ref } from 'vue'
import { auth } from '../firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

var usuario = ref(""), contraseña = ref("");

function registrarConGoogle(){
    console.log(usuario.value)
    signInWithPopup(auth, new GoogleAuthProvider())
    .then((userCredential) => {
        var user = userCredential.user;
        console.log(userCredential.user);
    })
    .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
    });
}

function altaUsuario(){
    signInWithEmailAndPassword(auth, usuario.value, contraseña.value)
    createUserWithEmailAndPassword(auth, usuario.value, contraseña.value)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log(userCredential.user);
    })
    .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
    });
}
</script>


<template>
    <div class="div_principal">
        <div class="div_login">
            <h3>Inicio de sesión</h3>
            <form>
                <input type='text' placeholder='Usuario'>
                <input type='password' placeholder='Contraseña'>
                <button id='btn_login'>Iniciar sesión</button>
            </form>
        </div>
        <div class="div_registro">
            <h3>Registro</h3>
            <form id='form'>
                <input type='text' placeholder='Nombre' name='nombre' id='f_nombre' required>
                <input type='text' placeholder='Usuario' name='usuario' id='f_usuario' v-model="usuario" required>
                <input type='password' placeholder='Contraseña' name='contrasena' id='f_contraseña' v-model="contraseña" required>
                <input type='email' name='email' id='f_email' placeholder='Email' required>
                <button id="btn_registro" @click="altaUsuario">registrarse</button>
            </form>
            <form>
                <button id="google" @click="registrarConGoogle">Registrarse con Google</button>
            </form>
        </div>
    </div>
</template>


<style>
</style>