<!--
    The CheckChildCodePassword view displays a textinput asking for a code. 
    This code pops up after the customer has already entered in their one time child code password
    If the code is correct and the user presses enter then child code will be turned off and the user will be able to order food again
-->

<template>
<div class="hero is-fullheight is-info is-bold">
<div class="hero-body">
<div class="container">

  <h1 align="center" class="title has-text-centered">Enter Code</h1>
  <div  align="center" class="box">

    <!-- our signup form ===================== -->
    <form id="signup-form">
      <!-- name -->
      <div align="center" class="field">
        <label class="label"><font size="+2">Code</font></label>
        {{name}}
        <input type="text"  v-model="name" placeholder="Code Here" number>
      </div>

      <!-- submit button -->
      <div align="center" class="field has-text-right">
        <button class="button3" v-on:click="checkValue(name)">Submit</button>
      </div>
    </form>

  </div>

</div>
</div>
</div>
</template>

<script>
export default {
    methods: {
      //The checkvalue method checks to see if the code the user enters is equal to the child code password entered earlier
      //If the codes match then the page will be redirected to the menu and child mode will be turned off
        checkValue(name){
            console.log(name);
            if(name === this.$store.state.childModePassWord){
                this.$store.state.userMode = 0; 
                this.$router.push('/menu');  
            }
            return 0;
        }
    }
}
</script>
<style scoped>
.mb-3{
    width:145%;
    padding-right: 600px;
}
.box {
    padding: 50px;
    position: fixed;
  left: 30%;
    padding: 50px;
}
</style>
