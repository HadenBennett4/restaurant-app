<!--
    The Pay view displays information on all of the orders that the customer has placed and the total
    The Pay view is one of the main tabs
    It utilizes the totalBox component which displays information on the total 
    It also loops through all of the items ordered and displays them as paymentOrderBoxs 
-->

<template>
<h1 ><font size="+5">PAYMENT</font></h1>
<div v-if="this.$store.state.userMode == 0">

    <div>
          <!--Loops through all of the items and displays them as a paymentOrderBox-->
         <div v-for="item in this.$store.state.paymentOrder" v-bind:key="item" class="col-12">
          <paymentOrderBox :priceFloat="item.priceFloat" :quan="getQuantity(item.name)" :name="item.name" :price="item.price" />
          </div>
    </div>
</div>
<div v-else>
      <br>
      <br>
      <font size="+10">CHILD MODE</font>
</div>
    <totalBox/>
  
</template>

<script>
import paymentOrderBox from '@/components/paymentOrderBox.vue'
import totalBox from '@/components/totalBox.vue'

export default {
  components: { paymentOrderBox, totalBox, },
  computer: {
    users() {
      return this.$store.state.paymentOrder;
    }
  },
  methods: {
    getQuantity(name){
      var i;
      for(i = 0; i < this.$store.state.paymentCount; i++){
        if(name == this.$store.state.paymentOrder[i].name){
          return this.$store.state.paymentQuantity[i];
        }
      }
      return 0;
    },
  }

}
</script>
<style>

</style>