<template>
  <div class="container mt-5">
    <h2>Lista de Posts</h2>

    <div class="row" v-for="post of posts" :key="post.id">
      <div class="col">
        <h3>{{ post.title.charAt(0).toUpperCase()+ post.title.slice(1) }}</h3>
        <!-- Autor -->
        <router-link :to="`/user/${post.userId}`">Autor</router-link>
        <p>{{ post.body}}</p>

        <button 
          class="mb-2 btn btn-secondary"
          @click="comentariosId(post.id)"
        > Ver comentarios
        </button>

        <template v-for="cFiltrado of comentariosFiltrados" :key="cFiltrado.id">
          <div class="mt-3 col-sm-10 offset-sm-1" v-if="cFiltrado.postId === post.id">
            <p class="mt-4 fw-bold">User: {{ cFiltrado.email}}</p>
            <br>
            <p>Respuesta: </p>
            <p>{{ cFiltrado.body}}</p>
          </div>
        </template>
      </div>
      <hr/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      posts: [],
      comentarios: [],
      comentariosFiltrados: []
    }
  },
  methods: {
    comentariosId(id) {
      console.log(id); // id del posts
      this.comentariosFiltrados = this.comentarios.filter( comentario => comentario.postId == id);
      console.log(this.comentariosFiltrados);
    },
    async consumirPosts() {
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const getPosts = await data.json(); // Array
        console.log(getPosts);
        this.posts = getPosts;
      } catch (error) {
        throw error;
      }
    },
    async consumirComentarios() {
      const data = await fetch(`https://jsonplaceholder.typicode.com/comments`);
      const getComentarios = await data.json(); // genera un array
      this.comentarios = getComentarios;
      console.log(this.comentarios);
    }
  },
  created() {
    this.consumirPosts();
    this.consumirComentarios();
  }
}
</script>

<style scoped>
  h3 {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: #544E4E;
    background: bisque;
    padding: 2px 7px;
    border-radius: 5px;
  }
</style>