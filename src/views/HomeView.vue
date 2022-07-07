<template>
  <div class="home">
    <InputBox/>
  </div>
</template>

<script>
// @ is an alias to /src
import InputBox from '@/components/InputBox.vue'

export default {
  name: 'HomeView',
  components: {
    InputBox
  }
}
</script>
