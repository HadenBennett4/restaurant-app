<!--
    The Alcoholic Drinks view displays all of the Alcoholic Drinks of the menu
    The user can sort the Alcoholic Drinks based on allergens

    The alcohlic drinks is different than the other menu pages becuase the first time the user clicks on the 
    alcoholic drink page a server is notified and has to check the ID of the customer
-->


<template>

  <div v-if="this.$store.state.is21">
      <h1>Alcoholic Drinks</h1>
        <button v-if="this.$store.state.milk== false" class="button10" v-on:click="milk(true)">Milk</button>
        <button v-if="this.$store.state.milk== true" class="button11" v-on:click="milk(false)">Milk</button>
        <button v-if="this.$store.state.eggs== false" class="button10" v-on:click="eggs(true)">Eggs</button>
        <button v-if="this.$store.state.eggs== true" class="button11" v-on:click="eggs(false)">Eggs</button>
        <button v-if="this.$store.state.fish== false" class="button10" v-on:click="fish(true)">Fish</button>
        <button v-if="this.$store.state.fish== true" class="button11" v-on:click="fish(false)">Fish</button>
        <button v-if="this.$store.state.Peanuts== false" class="button10" v-on:click="Peanuts(true)">Peanuts</button>
        <button v-if="this.$store.state.Peanuts== true" class="button11" v-on:click="Peanuts(false)">Peanuts</button>
        <button v-if="this.$store.state.wheat== false" class="button10" v-on:click="wheat(true)">Wheat</button>
        <button v-if="this.$store.state.wheat== true" class="button11" v-on:click="wheat(false)">Wheat</button>
        <button v-if="this.$store.state.soy== false" class="button10" v-on:click="soy(true)">Soy</button>
        <button v-if="this.$store.state.soy== true" class="button11" v-on:click="soy(false)">Soy</button>
    <div class="container">
    <div class="row">
      <div  v-for="item in entires" :key="item.name" class="col-6" >
          <Item foodType="item.foodType" :name="item.name" :image="item.image" :price="item.price" :priceFloat="item.priceFloat" :calories="item.calories" 
          :ingredients="item.ingredients" :allergens="item.allergens"  :carbs="item.carbs" :fat="item.fat"/>
      </div>
      
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
  },
  methods: {
    eggs(bo){
      if(bo == true){
         this.$store.state.eggs=true;
      }else{
         this.$store.state.eggs=false;
      }    
    },
    fish(bo){
      if(bo == true){
         this.$store.state.fish=true;
      }else{
         this.$store.state.fish=false;
      }    
    },
    Peanuts(bo){
      if(bo == true){
         this.$store.state.Peanuts=true;
      }else{
         this.$store.state.Peanuts=false;
      }    
    },
    wheat(bo){
      if(bo == true){
         this.$store.state.wheat=true;
      }else{
         this.$store.state.wheat=false;
      }    
    },
    soy(bo){
      if(bo == true){
         this.$store.state.soy=true;
      }else{
         this.$store.state.soy=false;
      }    
    },
    milk(bo){
      if(bo == true){
         this.$store.state.milk=true;
      }else{
         this.$store.state.milk=false;
      }    
    },
  },
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
