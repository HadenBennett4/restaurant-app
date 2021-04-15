<template>
  <div class="card">
    <img :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ game }}</h5>
      <p class="card-text">
      </p>
      <router-link :to="{ path: '/games/' + game}" class="button5">
        Play 
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    image: String,
    game: String
  }
}
</script>

<style>
  .card {
    margin: 10px;
  }
  .button5 {
  background-color: #1f7bc7;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>