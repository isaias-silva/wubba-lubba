<template>
  <div class="banner">
    <img src="https://images6.alphacoders.com/909/thumb-1920-909641.png" alt="banner">
    <h3>wellcome the wubba-lubba!</h3>
  </div>
  <div class="post">
    <p> this application brings together several characters from the rick and morty animated series, created by Justin
      Roiland and Dan Harmon</p>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomePage'
})
</script>
<style scoped>
.banner {
  width: 100%;
  height: 400px;
  position: relative;
}

.banner img {
  height: 100%;
  width: 100%;
}

.banner h3 {
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 42px;
  text-shadow: 2px 2px rgb(0, 255, 0);
}
</style>
