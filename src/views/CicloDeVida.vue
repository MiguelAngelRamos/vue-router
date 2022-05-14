<template>
  
  <h1>Ciclo de vida</h1>
  <h2>{{ name }}</h2> 
  <button class="btn btn-success" @click="onChangeName">Cambiar Nombre</button>

</template>

<script>
export default {
 data() {
   return {
     name: 'Miguel'
   }
 },
 methods: {
   onChangeName() {
     console.log('Cambiando de nombre...');
     console.log(this.name)
     this.name = 'Miguel Angel';
     console.log(this.name);
     
   }
 },
 // renderTriggered detecta cambios e indentifica que se disparando y que exitir un implicancia dentro del template
 // beforeUpdate se ejecuta antes de que se actualize el dom con el cambio
 // renderTracked es para que mantenga la referencia del cambio que se esta realizando
 // updated cuando ya termino de realizar la actualizacion (cambio)
 beforeCreate() {
   // No es lugar recomendable para realizar una peticion A UN API
   // ACA NO EXISTE LA DATA
    console.log('beforeCreate')
  },
  created() {
    // UN LUGAR IDEAL PARA REALIZAR LAS PETICIONES HACIA UN API
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  errorCaptured() {
    console.log('errorCaptured')
  },
  renderTracked() {
    console.log('renderTracked')
  },
  renderTriggered() {
    console.log('renderTriggered')
  }

}
</script>

<style>

</style>