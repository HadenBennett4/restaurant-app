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
        checkValue(name){
            console.log("hello");
            if(name === "1234"){
                this.$store.commit('make21True');
                console.log(this.$store.state.is21);
                this.$router.push('/menu/Alcoholic-Drinks');    
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
