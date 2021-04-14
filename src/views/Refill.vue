<!--
    The refill page allows the user to select different drinks for refills using a checkbox
-->

<template>
  <div class="refill">
    <h1>Need a drink refill?</h1>
    <h2>We got you!</h2>
    
    <h3>Select your drink here:</h3>
  
    <table>
            <tr>
                <td>Drinks:</td>
            </tr>
            <tr v-for="user in users" :key="user.drink" >
                <td><input type="checkbox" value="{{drink}}" id="{{drink}}"/> {{user.drink}}{{user.drink2}}</td>
                
                <td>{{user.customize}}</td>      
            </tr>
        </table>
    <br>
    <button v-on:click="enter">Request</button>
    <h2>{{server?"A server will come refill your drink shortly!":""}}</h2>
  </div>
</template>
<script>

export default {
    name:'Refill', 
    props:{
        drink:String,
        type:String,
    },data(){
        return { 
          number: 0,
          server: false,
            users: [
                //alcoholic
                {drink: "Soju", customize: "Flavor: Grapefruit, Green Grape, Peach, Strawberry, Apple, Yogurt, Lychee"},
                {drink: "Whiskey Sour", customize: "Customize: Bourbon, Lemon Juice, Simple Syrup, Egg White"},
                {drink: "Old Fashion", customize: "Customize: Bourbon, Sugar Cubes, Angostura Bitters, Cherry, Orange Slices"},
                {drink: "Appletini", customize: "Customize: Vodka, Apple Schnapps, Cointreau"},
                {drink: "Margarita", customize: "Customize: Cointreau, Lime Juice, Tequila"},  
                {drink: "Pina Colada", customize: "Customize: Coconut Cream, Pineapple Juice, White Rum"},
                {drink: "Daiquiri", customize: "Customize: White Rum, Simple Syrup, Lemon Juice"},
                {drink: "Sake Shots", customize: "Customize: Junmai-shu, Ginjo-shu, Daiginjo-shu, Honjozo-shu, Namazake"},
                {drink: "Long Island", customize: "Customize: Vodka, Rum, Gin, Tequila, Triple Sec, Sweet & Sour, Cola, Lemon Slices"}, 
                {drink: "Lemon Drop Shot", customize: "Customize: Lemon Juice, Vodka, Sugar"},
                {drink: "Smirnoff Ice", customize: "Customize: Who Knows"},
            
                //non-alcoholic
                {drink2: "Coke"},
                {drink2: "Diet Coke"},
                {drink2: "Sprite"},
                {drink2: "Dr. Thunder"},
                {drink2: "Diet Dr. Thunder"},
                {drink2: "Sparkling Water"},
                {drink2: "Hawaiian Punch"},
                {drink2: "Root Beer"},
                {drink2: "Club Soda"},
                {drink2: "Lemonade"},
                {drink2: "Sweet Tea"},
                {drink2: "Unsweet Tea"},
                {drink2: "Milk"},
                {drink2: "Water"} 
            ],        
    }
    },methods:{
      enter(){
        this.server=!this.server
      },
     
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  margin: 20px 0 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  margin-left:auto;
  margin-right:auto;
  text-align: center;
 
}
data {
  white-space: pre-line;
}
</style>
