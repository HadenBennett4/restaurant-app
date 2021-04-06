<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title"><font size="+3">{{ name }}</font></h5>
      <p class="card-text">
        <font size="+2">Quantity  - {{ quan }}</font> 
        <button class="button8" v-on:click="voidOrder(name)">void</button>
        &emsp;
        <br>
        <font size="+0">Price - ${{ (priceFloat * quan).toFixed(2)}}</font>
      </p>
      
    </div>
  </div>

</template>

<script>
export default {
  props:{
    name: String,
    price: String,
    quan: Number,
    priceFloat: Number
  },
  methods: {
    voidOrder(name){
      //Get quantity
      this.$store.state.paymentOrder.splice(this.$store.state.paymentOrder.indexOf(name),1);
      this.$store.state.paymentQuantity.splice(this.$store.state.paymentOrder.indexOf(name),1)
    }
  }
}
</script>

<style>
  .card {
    margin: 10px;
  }
  .button {
  background-color: #4CAF50;
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
.button:hover {
  background-color: #4CAF50;
  border: none;
  color: rgb(0, 110, 255);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button2:hover {
  background-color: #ca3d3d;
  border: none;
  color: rgb(0, 110, 255);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}.button2 {
  background-color: #ca3d3d;
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
  .button8:hover {
  position: absolute;
  top: 34%;
  right: 40px;
  background-color: #ca3d3d;
  border: none;
  color: rgb(0, 110, 255);
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}.button8 {
  position: absolute;
  right: 40px;
  top: 34%;
  background-color: #ca3d3d;
  border: none;
  color: white;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>