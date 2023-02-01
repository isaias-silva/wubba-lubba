<template>
  <div class="aside">
    <h3>characters:</h3>
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
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
        { name: 'rick', link: 'a' },
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
.aside {
  height: 100%;
  background-color: rgb(20, 20, 20);
  width: 100%;
  color: #fff;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.aside::-webkit-scrollbar {
  width: 5px;
  background-color: rgb(31, 31, 31);

}

.aside::-webkit-scrollbar-button {
  display: none;
}

.aside::-webkit-scrollbar-thumb {
  background-color: rgb(0, 255, 0);
  border-radius: 20px;
}

h3 {
  text-shadow: 0px 0px 12px rgb(0, 255, 0);
  font-size: 18px;
}

ul {
  margin: auto;
}

li {
  margin: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}

li a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  border-bottom: 1px solid #fff;
  text-align: center;
  margin: auto;
  width: 50%;
}

li a:hover {
  color: greenyellow;
  border-color: greenyellow;
}
</style>
