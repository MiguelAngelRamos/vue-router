<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VueRouter</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <!-- <router-link class="nav-link" to="/users">Users</router-link> -->
            <router-link class="nav-link" :to="{name: 'users'}">Users</router-link>
          </li>
        </ul>

      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
  .navbar {
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
  }

  .navbar li a.router-link-exact-active {
    color: rgb(12, 12, 12);
    font-weight: bold;
  }
</style>