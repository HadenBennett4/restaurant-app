<!--
    The itemType.vue component is used to display the different types of menu items. 
    An example of an itemType is "entree" 
-->

<template>
  <div class="card">
    <img :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ foodType }}</h5>
      <p class="card-text">
      </p>
      <router-link :to="{ path: '/menu/' + foodType}" class="button5">
        Browse {{foodType}} 
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    image: String,
    foodType: String
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