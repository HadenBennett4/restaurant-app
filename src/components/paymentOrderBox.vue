<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title"><font size="+3">{{ name }}</font></h5>
      <p class="card-text">    </p>
        <font size="+2">Quantity  - {{ quan }}</font> 
        <br>
        <font size="+0">Price - ${{ (priceFloat * quan).toFixed(2)}}</font>
        <button class="button8"  v-on:click="modalTrue()">void</button>
        <div class="card"  v-if="showModal"></div>  
          <div  v-if="showModal">
            <button class="button2" v-on:click="modalFalse()">Back</button>
            <!--Add a text box for code -->
            <input  type="text"  v-model="code" placeholrder="Code Here" number>
            <button class="button3" v-on:click="checkCode(code,name)">Enter Manager Code</button>
        </div>
        <div class="card" v-if="showQuantity"></div>  
          <div  v-if="showQuantity">
            <button class="button2" v-on:click="QModalFalse()">Back</button>
            <!--Add a text box for code -->
            <input  type="text"  v-model="numToVoid" placeholrder="Quantity Here" number>
            <button class="button3" v-on:click="voidOrder(name,numToVoid)">Enter Number To Void</button>
        </div>
        
    </div>
  </div>

</template>

<script>
export default {
    data () {
    return {
      showModal: false,
      showQuantity: false,
      numToVoid: "Quantity",
      code: "Manager Code"
    }
  },
  props:{
    name: String,
    price: String,
    quan: Number,
    priceFloat: Number
  },
  methods: {
    voidOrder(name, numToVoid){
      //Get quantity
      console.log(name);
      //Only Removing last element in the arrray 
      var quantityRemoved = 0;
      var i;
      for(i = 0; i < this.$store.state.paymentCount; i++){
        if(name === this.$store.state.paymentOrder[i].name){
          if(numToVoid < this.$store.state.paymentQuantity[i]){
            this.$store.state.paymentQuantity[i] = this.$store.state.paymentQuantity[i] - numToVoid;
            this.showQuantity = false;
          }else{
            this.$store.state.paymentQuantity.splice(i,1);
            this.$store.state.paymentOrder.splice(i,1);
            this.$store.state.paymentCount--;
            this.showQuantity = false;
          }
          
        }
      }
    },
    modalFalse(){
      this.showModal = false;
      this.code = "Manager Code";
      console.log(this.showModal);
    },
    modalTrue(){
      this.showModal = true;
      this.showQuantity = false;
      console.log(this.showModal);
    },
    QModalFalse(){
      this.showQuantity = false;
      this.code = "Manager Code";
      console.log(this.showQuantity);
    },
    QModalTrue(){
      this.showQuantity = true;
      console.log(this.showQuantity);
    },
    checkCode(code){
      if(code=="1234"){
        this.showModal = false;
        this.showQuantity = true;
      }
    }
  },


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