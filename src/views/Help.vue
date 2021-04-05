<template>
<br>
<br><br>
<br>
<div v-if="this.$store.state.userMode == 0">
  <button class="button6"> <font size="+10">Request Help</font></button>
  </div>
  <div v-else>
      <br>
      <br>
      <font size="+10">CHILD MODE</font>
      </div>
</template>

<script>
export default {

}
</script>

<style>
.button6 {
  background-color: #e79804;
  border: #353535;
  border-style: solid;
  color: white;
  width: 75%;
  height: 500%;
  padding: 100px 128px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button6:hover {
  background-color: #e79804;
  border: rgb(0, 119, 255);
  border-style: solid;
  color: rgb(0, 119, 255);
  width: 75%;
  height: 500%;
  padding: 100px 128px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>