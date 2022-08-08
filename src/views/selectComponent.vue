<template>
  <div>
    <select v-model='selected'>
      <option v-for="oneDep in oneDeps" :key="oneDep.index" v-bind:value="oneDep.value">
        {{ oneDep.text }}
      </option>
    </select>
    <div>
      <component :is="selected"/>
    </div>
  </div>
</template>

<script>
import Home from '@/views/HomeView.vue'
export default {
  name: "selectComponent",
  components: {
    Home
  },
  data (){
    return {
      selected: "B",
      component: this.selected,
      oneDeps: [
        { text: 'One', value: 'Home' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}
</script>

<style scoped>

</style>