<template>
  <div id="nav">
    <router-link :to="{ name: 'Menu' }">Menu</router-link>
    <router-link :to="{ name: 'Games' }">Games</router-link>
    <router-link :to="{ name: 'Music' }">Music</router-link>
    <router-link :to="{ name: 'Checkout' }">Order</router-link>
    <router-link :to="{ name: 'Help' }">Help</router-link>
    <router-link :to="{ name: 'Refill' }">Refill</router-link>
    <router-link :to="{ name: 'Login' }">Login</router-link>
    <router-link :to="{ name: 'Pay' }">Pay</router-link>
  </div>
  <router-view/>
</template>
<script>
export default {
    created() {
      var hour = new Date().getHours();

      var darkModeToggle = document.getElementById("darkModeToggle");

      if((hour >= 17) || (hour <= 6))
      {
        while(!(document.body.classList.contains("darkMode")))
        {
          document.body.classList.toggle("darkMode");
        }
      }
      else
      {
        while(document.body.classList.contains("darkMode"))
        {
          document.body.classList.toggle("darkMode");
        }
      }
    }
  }
</script>

<style>
:root {
  --app-primary-color: #ddd;
  --app-secondary-color: #2c3e50;
  --app-tertiary-color: #000000;
}
.darkMode {
  --app-primary-color: #121212;
  --app-secondary-color: #B3B3B3;
  --app-tertiary-color: #282828;
}

body {
  background-color: var(--app-primary-color);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--app-secondary-color);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: var(--app-secondary-color);
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson
}

.navbar .navbar-nav .nav-link {
    color: var(--app-tertiary-color);
    font-size: 1.1em;
}
.navbar .navbar-nav .nav-link:hover{
    color: #808080;
}
</style>
