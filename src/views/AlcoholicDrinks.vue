<template>

  <div v-if="this.$store.state.is21">
      <h1>Alcoholic Drinks</h1>
    <div class="row">
      <div  v-for="item in entires" :key="item.name" class="col-6" >
          <Item foodType="item.foodType" :name="item.name" :image="item.image" :price="item.price" :priceFloat="item.priceFloat" :calories="item.calories" 
          :ingredients="item.ingredients" :allergens="item.allergens"/>
      </div>
      
    </div>
  </div>
  <div v-else>
        <body class="backgroundcolor">
          <font size="+12">PLEASE WAIT FOR A SERVER TO CHECK YOUR ID</font>
          <p>
            <font size="+2"><br> THANK YOU!! <br></font>
          </p>
      <br>
      <router-link class="button5" :to="{ path: '/alcoholCode' }">Enter Employee Code</router-link>
    </body>

  </div>
</template>

<script>
import { entires } from '@/assets/data/alcoholicDrinksEntries.js'
import Item from '@/components/Item.vue'

export default {
  name: 'SubMenu',
  components: { Item },
  data() {
    return {
      entires
    }
  }
}
</script>

<style>
  .backgroundcolor {
        background-color: rgb(233, 161, 67);
        text-align: center;
        padding-bottom: 500px;
        padding-top: 10%;
        height: 100%,
    }
</style>
