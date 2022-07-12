<template>
  <div class="hello">
    <textarea v-model="item"/> <button @click="onSave()">저장</button>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: 'InputBox',
    data() {
      return{
        item: "",
    }
  },
    methods: {
      onSave() {
        axios.put('http://localhost:8081/saveList', {title: "vue.js는 조으다."})
            .then(res => {
              console.log(res.data)
            })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
