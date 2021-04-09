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
:root {
  --help-primary-color: #e79804;
  --help-secondary-color: #353535;
}
.darkMode {
  --help-primary-color: #282828;
  --help-secondary-color: #181818;
}

.button6 {
  background-color: var(--help-primary-color);
  border: var(--help-secondary-color);
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
  background-color: var(--help-primary-color);
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