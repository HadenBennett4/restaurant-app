<!--
    The Item Component is used to display each different food item. 
    All types of foods such as kids meals, entrees, desserts,etc. are considered Items
-->

<template>
  <div v-if="canShow(allergens)" class="card">
    <img :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        {{price}}
      </p>
      <p class="card-text" v-if="ingredients.length>0">
        Ingredients - {{ingredients}}
      </p>
      <p class="card-text" v-if="allergens.length>0">
        Allergens - {{allergens}}
      </p>
      <p class="card-text" v-if="calories.length>0">
        Calories - {{calories}}
      </p>
      <p class="card-text" v-if="carbs.length>0">
        Carbs - {{carbs}}
      </p>
      <p class="card-text" v-if="fat.length>0">
        Fat - {{fat}}
      </p>


      <button class="button3" v-on:click="addItemToOrder(name,price,calories,ingredients,allergens,priceFloat)">Add To Order!</button>
    </div>
  </div>
  <!-- <slot name="foodInfo"></slot> -->
</template>

<script>
export default {
  computer: {
    users() {
      return this.$store.state.order;
    }
  },
  props: {
      image: String,     
      name: String,
      price: String,
      calories: String,
      ingredients: Array,
      allergens: Array,
      priceFloat: Number,
      carbs: String,
      fat: String,
      
      
    
  },
  methods: {
    addItemToOrder(name,price,calories,ingredients,allergens,priceFloat){

        console.log(name+" Added To Order");
        //Loop through each order
            //if name of item trying to be added is already in the order 
                //at quantity[count] increment

            //else
                //Push new order
                //Push new quantity with value of 1
                //Increment count
        var i;
        var inOrder = 0;
        for(i = 0; i < this.$store.state.count; i++) {
          if(name == this.$store.state.order[i].name){
              this.$store.state.quantity[i]++;
              console.log(this.$store.state.quantity[i]);
              inOrder = 1;
          }
        }
        if(inOrder == 0){
          this.$store.state.order.push(({name,price,calories,ingredients,allergens,priceFloat}));
          this.$store.state.quantity.push(1);
          this.$store.commit('increment')
        } 
    },
    //The can show function determines if the item can be show based on which allergen is shown
      //It checks the items allergens and detemines if they are chosen to be not shown by the customer
      //The can show function is used in the <template> to show the items
    canShow(a){
      var i;
      for(i = 0; i < a.length; i++){
        if(a[i]=== "Milk" && this.$store.state.milk == true){
            return false;
        }
        if(a[i]=== "Eggs" && this.$store.state.eggs == true){
            return false;
        }
        if(a[i]=== "Wheat" && this.$store.state.wheat == true){
            return false;
        }
        if(a[i]=== "Soy" && this.$store.state.soy == true){
            return false;
        }
        if(a[i]=== "Fish" && this.$store.state.fish == true){
            return false;
        }
        if(a[i]=== "Peanuts" && this.$store.state.Peanuts == true){
            return false;
        }
      }
      return true;
    }
  },
  
}
</script>

<style>
:root {
  --item-primary-color: white;
}
.darkMode {
  --item-primary-color: #282828;
}

  .card {
    margin: 10px;
    background-color: var(--item-primary-color);
  }
  .button3 {
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