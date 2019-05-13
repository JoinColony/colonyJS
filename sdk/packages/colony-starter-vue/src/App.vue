<template>
  <div id="app">
    <header class="header">
      <img alt="Colony logo" src="./assets/logo.png" class="logo">
      <span class="title">
        colony-starter-react
      </span>
    </header>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  margin: 0
}
</style>
<style scoped>
.container {
  font-family: sans-serif;
  text-align: center;
  width: 100vw;
}

.header {
  background-color: rgb(40,44,52);
  height: 12vmin;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.logo {
  animation: App-logo-spin infinite 20s linear;
  height: 6vmin;
}

.title {
  color: #00C583;
  font-size: calc(5px + 2vmin);
  font-weight: 300;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.content {
  padding: 4vmin;
}
</style>
