<template>
  <div class="container mt-5">
    <h2>Lista de Posts</h2>

    <div class="row" v-for="post of posts" :key="post.id">
      <div class="col">
        <h3>{{ post.title.charAt(0).toUpperCase()+ post.title.slice(1) }}</h3>
        <p>{{ post.body}}</p>
      </div>
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
    async consumirPosts() {
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const getPosts = await data.json();
        console.log(getPosts);
        this.posts = getPosts;
      } catch (error) {
        throw error;
      }
    
    }
  },
  created() {
    this.consumirPosts();
  }
}
</script>

<style>

</style>