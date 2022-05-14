<template>
  <div class="container mt-5 col-sm-6 offset-sm-3">
    <h3 class="fst-italic text-center">Listado de Usuarios</h3>
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nick</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Sitio Web</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="usuario of users" :key="usuario.id">
            <td>{{ usuario.name }}</td>
            <td>{{ usuario.username}}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.address?.street}}</td>
            <td>{{ usuario.website }}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {

  data() {
    return {
      users: []
    }
  },
  methods: {
    async consumirUsuarios() {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await data.json();
        this.users = usuarios;
        console.log(this.users);
      } catch (error) {
        throw error;
      }
    }
  },
  created() {
    this.consumirUsuarios();
  }
}
</script>

<style>

</style>