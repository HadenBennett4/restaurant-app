<!--This payment form was created bu Kabir Bhatia and was used from bbboostrap.com 

    The Payment view displays 4 Different things
        1 - Card Information Input Box
        2 - Pay with cash Instead Button
        3 - Review Box
        4 - And Spin Wheel to Win free prize

-->

<template>
  <h1>Payment</h1>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
        <div class="col-sm-12">
            <div class="card5 mx-auto">
                <p class="heading"><font size="+2">Payment Details</font></p>

                <form class="card-details ">
                    <div class="form-group mb-0">
                        <p class="text-warning mb-0">Card Number</p><br> <input type="text" name="card-num" placeholder="1234 5678 9012 3457" size="19" id="cno" minlength="16" maxlength="16">
                    </div>
                    <div class="form-group">
                        <p class="text-warning mb-0">Cardholder's Name</p> <input type="text" name="name" placeholder="Name" size="17">
                    </div>
                    <div class="form-group pt-2">
                        <div class="row d-flex">
                            <div class="col-sm-4">
                                <p class="text-warning mb-0">Expiration</p> <input type="text" name="exp" placeholder="MM/YYYY" size="7" id="exp" minlength="7" maxlength="7">
                            </div>
                            <div class="col-sm-3">
                                <p class="text-warning mb-0">Cvv</p> <input type="password" name="cvv" placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3">
                            </div>
                             <div @click="eraseData()">
                                <p>
                                    <span class="button3"><font size="+3">></font></span>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <br>
            <br>
            <router-link  :to="{ path: '/cashPayment' }" class="button3">
                    <font size="+3">Pay With Cash Instead</font>
                </router-link>
        </div>
    </div>
</div>
<br>
<br>
  <div class="ReviewBox">  
    <label ><font size="+2">Write a Review</font></label>
    <br>
    <textarea class="card6 mx-auto" id="{{this.$store.state.review}}" v-model="this.$store.state.review" rows="10" cols="100">
        Write a Review
      </textarea>
      <br>
      <button class="btn btn-primary" type="submit">Submit</button>   
  </div>
  <br>
<div class="Discount">
    <h2>Spin The Wheel For Free Dessert !!</h2>
    
    <img class="wheel" src="../assets/img/circle-cropped.png" />
    <button type="SpinButton" id="spin" v-on:click="Free()">Go !!</button>
    </div>
    <img class="marker" src="../assets/img/marker.png"/>
    <br>
    <div id='window' style='visibility: hidden'>
        <button id="redeem"> Prize Info </button>
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Collect Your Coupon From The Manager</p>
            </div>
        </div>
    </div>
<br>
<br>
</template>

<script>

export default {
     methods: {
      computeTotal(){
        var i;
        var tot = 0;
        for(i = 0; i < this.$store.state.count; i++){
            console.log(this.$store.state.order[i].priceFloat);
            tot = tot + (this.$store.state.order[i].priceFloat * this.$store.state.quantity[i]);
        }
        if(this.$store.state.count == 0){
            return 0;
        }
        tot = tot + (tot * .0825)  + this.$store.state.tip;
        return tot;
        
      },
      computeSubtotal(){
        var i;
        var sub = 0;
        for(i = 0; i < this.$store.state.count; i++){
            sub = sub + this.$store.state.order[i].priceFloat * this.$store.state.quantity[i];
        }
        if(this.$store.state.count == 0){
            return 0;
        }
        return sub;
      },
      computeTip(percent){
          this.$store.state.tipPercent = percent;
          return this.$store.state.tip =  this.computeSubtotal() * this.$store.state.tipPercent/100
      },
      computeTax(){
          return (this.computeSubtotal() * .0825);
      },
      eraseData(){
          this.$store.state.order = [];
          this.$store.state.quantity = [];
          this.$store.state.specialInstructions = "";
          this.$store.state.count = 0;
          this.$store.state.paymentOrder = [];
          this.$store.state.paymentQuantity = [];
          this.$store.state.paymentCount = 0;
          this.$store.state.review = "";
          this.$router.push('/paymentComplete');
          this.$store.state.tipPercent = 0;
      },
      Free(){
        var modal = document.getElementById("myModal");
        var redeemBtn = document.getElementById("redeem");
        var span = document.getElementsByClassName("close")[0];
        //open the modal 
        redeemBtn.onclick = function() {
        modal.style.display = "block";
        }
        //close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }


        const wheel=document.querySelector('.wheel');
        let deg = 0;
        var node;
        //calculate how many degreees to rotate
        deg = Math.floor(2000 +Math.random() * 2000);
        //slow the wheel animation
        wheel.style.transition = 'all 5s ease-out';
        //rotate wheel image
        wheel.style.transform = `rotate(${deg}deg)`;

        //if wheel lands on green
        if(deg%360<180 && deg%360>45){
            //make the redeeming button visible
            node = document.getElementById('window');
            node.style.visibility = 'visible';
        }
        //disable button after 1 spin
        document.getElementById("spin").disabled = true;       
      }
  }
}
</script>

<style>
.card5 {
    border: none;
    background-color: white;
    max-width: 600px;
    border-radius: 15px;
    padding: 50px;
    padding-bottom: 50px !important
}

.card6 {
    border: none;
    background-color: white;
    max-width: 600px;
    border-radius: 15px;

}

.heading {
    color: #353535;
    font-size: 14px;
    font-weight: 500
}


img:hover {
    cursor: pointer
}

.text-warning {
    font-size: 12px;
    font-weight: 500;
    color: #cf9e2a !important
}

#cno {
    transform: translateY(-10px)
}

input {
    border-bottom: 1.5px solid #E8E5D2 !important;
    font-weight: bold;
    border-radius: 0;
    border: 0
}

.form-group input:focus {
    border: 0;
    outline: 0
}

.col-sm-5 {
    padding-left: 90px
}
.submit {
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
.ReviewBox{
   border-radius: 120px;
}
.wheel{
    width: 300px;
    height: 300px;
    margin: 0 auto;
    position: relative;
}
.marker{
    margin: 0 auto;
    position: relative;
    left: -26px;
    top: -40px;
}
.SpinButton{
    display: block;
    width: 250px;
    margin: 40px auto;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
</style>
