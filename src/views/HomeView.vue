<template>
  <div class="home">
    <InputBox/>
    <ul>
      <li>test</li>
      <li v-for="item in items" :key="item.contentKey">
        {{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import InputBox from '@/components/InputBox.vue'
import axios from "axios";

export default {
  name: 'HomeView',
  components: {
    InputBox
  },
  data (){
    return{
      items : [],
    }
  },
  mounted() {
    axios.get('http://localhost:8081/getList')
        .then(res => {
          console.log(res, res.data);
          this.items = res.data;
          console.log(this.items);
        })
  },
  methods: {

  }

}
</script>
