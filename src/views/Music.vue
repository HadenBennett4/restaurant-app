<template>
  <h1>Music</h1>
  <div class="container">
    <div v-if="this.$store.state.userMode == 0" class="row">
      <div v-for="item in itemTypes" :key="item.name" class="col-6">
          <game :image="item.image" :foodType="item.name"/>
      </div>
    </div>
    <div v-else>
      <br>
      <br>
      <font size="+10">CHILD MODE</font>
      </div>
  </div>
  
</template>

<script>
import { itemTypes } from '@/assets/data/musicPlaylists.js'
import game from '@/components/music.vue'

export default {
  name: 'Menu',
  components: { game },
  data() {
    return {
      itemTypes
    }
  }
}
</script>

<style>
  
</style>