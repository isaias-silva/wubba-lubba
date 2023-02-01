<template>
  <div class="post">
    <h2>wellcome for wubba-lubba!</h2>
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
.post {
  color: #fff;
  background: rgba(13, 13, 13, 0.739);
  width: 90%;
  margin: auto;
  margin-top: 10px;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 10px;
  min-height: 300px;
}
.post h2{
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
