<template>
  <main>
    <header>
      <img class="logo" alt="Vue" src="../assets/logo.png">
      <span class="title">
        colony-starter-vue
      </span>
    </header>
    <div class="content">
      <Home />
    </div>
  </main>
</template>

<script>
import Home from './components/Home.vue'

export default {
  components: {
    Home,
  },
}
</script>

<style>
body {
  margin: 0
}
main {
  color: #2c3e50;
  font-family: 'Avenir', sans-serif;
  text-align: center;
}
header {
  background-color: rgb(40, 44, 52);
  height: 12vmin;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.logo {
  height: 6vmin;
  padding: 1vmin;
}
.title {
  color: #00C583;
  font-size: calc(5px + 2vmin);
  font-weight: 300;
}
.content {
  padding: 4vmin;
}
</style>
