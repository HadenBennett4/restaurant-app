<template>
<h1 v-if="this.$store.state.userMode == 0"><font size="+5">PAYMENT</font></h1>
<div v-else>
      <br>
      <br>
      <font size="+10">CHILD MODE</font>
      </div>
    <totalBox/>
  
</template>

<script>
import totalBox from '@/components/totalBox.vue'
export default {
  components: {totalBox },
  computer: {
    users() {
      return this.$store.state.paymentOrder;
    }
  },

}
</script>