<template>
<h1 ><font size="+5">PAYMENT</font></h1>
<div v-if="this.$store.state.userMode == 0">

    <div>
          
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