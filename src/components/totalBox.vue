<!--
    The totalBox is used in the payment page 
    It contains infromation such as the tip, total, subtotal and tax
    The totalBox allows the user to enter a custom tip and also includes the button to actually pay
-->

<template>
  <div v-if="this.$store.state.userMode == 0" class="footer">
    
      <h1 v-if="this.$store.state.paymentCount == 0"><br><br>NO ORDERS YET<font size="+20"></font></h1>
    <div class="card-body">
      <h5 class="card-title"><font size="+3"></font></h5>
      <p  v-if="this.$store.state.paymentCount > 0" align="left" class="card-text"> 
            <button class="button3" v-on:click="computeTip(15)">15%</button>
            <button class="button3" v-on:click="computeTip(20)">20%</button>
            <button class="button3" v-on:click="computeTip(25)">25%</button>
            <input class="button3" type="text" v-model="this.$store.state.tipPercent">
            <font size="+1"> Enter Percent</font>
      </p>
      
      <h2 v-if="this.$store.state.paymentCount > 0" align="Center" class="card2">
            <p align="left">
                <br>
                Sub - ${{computeSubtotal().toFixed(2)}}
                <br>
                Tax - ${{computeTax().toFixed(2)}}
                <br>
                Tip - ${{computeTip(this.$store.state.tipPercent).toFixed(2)}}
                <br>
                <br>
                 ---------------------------------
                 <br>
                 <br>
                Total - ${{computeTotal().toFixed(2)}}
                <br>
                <br>
                <router-link align="right" :to="{ path: '/payment' }" class="button3">
                    <font size="+3">Click to Pay</font>
                </router-link>
                </p>

      </h2>

    </div>
  </div>

</template>

<script>
export default {
  methods: {
    //Computes the overall total
      computeTotal(){
        var i;
        var tot = 0;
        console.log(this.$store.state.paymentCount);
        for(i = 0; i < this.$store.state.paymentCount; i++){
            console.log(this.$store.state.paymentOrder[i].priceFloat);
            tot = tot + (this.$store.state.paymentOrder[i].priceFloat * this.$store.state.paymentQuantity[i]);
        }
        if(this.$store.state.paymentCount == 0){
            return 0;
        }
        tot = tot + (tot * .0825)  + this.$store.state.tip;
        console.log("Order item 1  " + this.$store.state.paymentOrder[0] );
        console.log(2);
        return tot;
        
      },
      //Computes the subtotal based on the items that have been ordered
        //This uses the paymentOrder array that includes all the orders the customer has placed
      computeSubtotal(){
        var i;
        var sub = 0;
        for(i = 0; i < this.$store.state.paymentCount; i++){
            sub = sub + this.$store.state.paymentOrder[i].priceFloat * this.$store.state.paymentQuantity[i];
        }
        if(this.$store.state.paymentCount == 0){
            return 0;
        }
        return sub;
      },
      //Computes the tip based on the percentage 
      computeTip(percent){
          this.$store.state.tipPercent = percent;
          
          if(this.$store.state.tipPercent >= 0)
          {
            return this.$store.state.tip =  this.computeSubtotal() * this.$store.state.tipPercent/100
          }
      },
      //Computes the tax based on the subtotal
      computeTax(){
          return (this.computeSubtotal() * .0825);
      }
  }
}
</script>

<style>
:root {
  --total-primary-color: rgb(255, 255, 255);
  --total-secondary-color: rgb(221, 221, 221);
}
.darkMode {
  --total-primary-color: #282828;
  --total-secondary-color: #404040;
}

  .card {
    margin: 10px;
  }
  .card2 {
    margin: 10px;
    width: 100%;
    text-align: center;
    padding: 15px 32px;
    border:rgb(4, 228, 161);
    background-color: var(--total-primary-color);
  }
  .card3 {
    margin: 10px;
    width: 100%;
    text-align: center;
    padding: 15px 32px;
    border:rgb(255, 255, 255);
    background-color:rgb(255, 255, 255);
    display: inline-block;
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
.button3 {
  background-color: #e79804;
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
.button3:hover {
  background-color: #e79804;
  border: none;
  color: rgb(0, 119, 255);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button4 {
  background-color: #ffffff;
  display: inline-block;
  width: 100%;
  border: none;
  color: #353535;
  padding: 90px 128px;
  text-align: left;
  vertical-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button2 {
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
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: var(--total-secondary-color);
  border: rgb(116, 60, 60);
  text-align: center;
}
.box {
    text-align: center;
    height:100px;
    width:40%;
    background-color:rgb(255, 255, 255);

    padding-right: 30px;
    padding-left: 30px;
    border-style: solid;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;            
}
.text{
  background-color: #e79804;
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
