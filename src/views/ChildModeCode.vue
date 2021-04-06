<template>
<div class="hero is-fullheight is-info is-bold">
<div class="hero-body">
<div class="container">

  <h1 align="center" class="title has-text-centered">Enter Child Mode Password</h1>
  <div  class="box">

    <!-- our signup form ===================== -->
    <form id="signup-form">
      <!-- name -->
      <div class="field">
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
            this.$store.state.childModePassWord = name;
            this.$router.push('/menu');
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
  position: fixed;
  left: 30%;
    padding: 50px;
}
</style>
