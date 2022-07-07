<template>
  <div class="hello">
    <textarea v-model="item"/> <button @click="onSave()">저장</button>
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  data() {
    return{
      item: "",
  }
},
  methods: {
    onSave() {
      /*Todo axios를 이용하여 db에 값을 넣고 리스트로 보여주는 기능 개발*/
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
