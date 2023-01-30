<template>
  <div class="aside">
    <h3>characters</h3>
    <ul>
      <li v-for="(item, key) in person" :key="key">
        <router-link :to="item.link">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data: (): { person: { name: string, link: string }[] } => {
    return {
      person: [
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' }
      ]
    }
  }
})
</script>
<style scoped>
  .aside{
    height: 100vh;
    background-color: black;
    width: 10%;
    color: #fff;
  }
</style>
