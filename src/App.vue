<template>
<HeaderComponent/>
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
</style>
