<!--
    The Checkout view displays the order tab.
    This view uses the checkoutBox component and loops through the order and displays each item as a checkoutBox
    The checkout view also contains a special instruction box for the users order
    This is where the user sends their order to the kitchen
-->

<template> 
    <div class="container">

    <div v-if="this.$store.state.userMode == 0" class="card3">
      <div v-if="this.$store.state.count == 0">
        <!--If there are no items in the order it will not display the checkoutBoxs but instead a message saying that there are no items in the order-->
        <font size="+10">NO ITEMS IN ORDER</font>
        </div>
        <!--Loops through the order array and displays a checkoutBox for each item-->
      <div v-for="item in this.$store.state.order" v-bind:key="item" class="col-12">
          <checkoutBox :priceFloat="item.priceFloat" :quan="getQuantity(item.name)" :name="item.name" :price="item.price" />
      </div>   
    </div>
    <div v-else>
      <br>
      <br>
      <br><br><br><br>
      <font size="+10">CHILD MODE</font>
      </div>
    <br>
    <br>
    <br>
    <br>
    <br>
          <h2 v-if="this.$store.state.count > 0" align="Center" class="card3">
        <h5 class="card-title"><font size="+10">Add Special Instructions</font></h5>
              <input class="button4" type="text" v-model="this.$store.state.specialInstructions">
      </h2>
      <div v-if="this.$store.state.count > 0" @click="eraseOrder()">
        <p>
          <span class="button3">Click to Send Order</span>
          </p>
          </div>
      <br>
      <br>
      <br>
      <br>
  </div>


</template>

<script>
import checkoutBox from '@/components/checkoutBox.vue'
import totalBox from '@/components/totalBox.vue'
export default {
  components: { checkoutBox, totalBox },
  computer: {
    users() {
      return this.$store.state.order;
    }
  },
  methods: {
    getQuantity(name){
      var i;
      for(i = 0; i < this.$store.state.count; i++){
        if(name == this.$store.state.order[i].name){
          return this.$store.state.quantity[i];
        }
      }
      return 0;
    },
    //When the user sends the order the order is erased from the local data
        //The order is also sent to the kitchen in the function
    eraseOrder () {
      var i;
      var addNewElement = 0;
      for(i = 0; i < this.$store.state.count;i++){
          addNewElement = 0;
          var x;
          for(x = 0; x < this.$store.state.paymentCount; x++){
              if(this.$store.state.order[i].name === this.$store.state.paymentOrder[x].name){
                  addNewElement = 1;
                  this.$store.state.paymentQuantity[x] =  this.$store.state.paymentQuantity[x] + this.$store.state.quantity[i];
              }
          }
          if(addNewElement == 0){
            this.$store.state.paymentOrder.push(this.$store.state.order[i]);
            this.$store.state.paymentQuantity.push(this.$store.state.quantity[i]);
            this.$store.state.paymentCount++;
          }   
      }
        console.log("Payment Count - "+this.$store.state.paymentCount);
        this.$store.state.order = [];
        this.$store.state.quantity = [];
        this.$store.state.specialInstructions = "";
        this.$store.state.count = 0;
        this.$router.push('/orderComplete');
        
    },
  }

}
</script>

<style>
.card3 {
    margin: 10px;
    width: 100%;
      padding: 15px 32px;
    border:rgb(4, 228, 161);
    background-color:rgb(16, 155, 190);
  }
</style>