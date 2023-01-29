<template>
  <div class="todo">
    <HeaderComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue'
export default defineComponent({
  components: {
    HeaderComponent
  }
})
</script>

<style>
*{
  margin:0;
  padding: 0;
}
body, html{
  height: 100%;
  width: 100%;
}
.todo{

}
</style>
