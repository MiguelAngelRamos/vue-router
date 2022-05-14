<template>
  <!-- <p>{{ $route.params.id}}</p> -->
  <div class="container">
    <h1 class="text-center">Información del Usuario</h1>

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
        <tr>
          <td>{{ user.name }}</td>
          <td>{{ user.username}}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address?.street}}</td>
          <td>{{ user.website }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    async mostrarAutor() {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`);
      const getUser = await data.json(); // es un objeto
      this.user = getUser;
      console.log(this.user);

    }
  },
  created() {
    this.mostrarAutor();
  }
}
</script>

<style>

</style>