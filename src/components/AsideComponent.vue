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
import axios from 'axios'

export default defineComponent({
  data: (): { person: { name: string, link: string }[] } => {
    return {
      person: [
      ]
    }
  },
  created () {
    this.requestPersons()
  },
  methods: {
    requestPersons () {
      for (let i = 1; i < 3; i++) {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`).then((_response) => {
          console.log(_response.data)
          // eslint-disable-next-line array-callback-return, @typescript-eslint/no-empty-function
          _response.data.results.map((value: { name: string, id: string }) => {
            this.person.push({ name: value.name, link: `/character/${value.id}` })
          })
        })
      }
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
  margin: auto;
}

li {
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}

li a {
  text-decoration: none;
  color: #fff;
  font-size: 13px;
  text-align: center;
  width: 50%;
  position: relative;
  transition: 0.2s linear;
}

li a:hover {
  color: greenyellow;
}

li a::before {
  content: '@';
  position: absolute;
  left: -20px;
  filter: opacity(0);
}

li a:hover::before {
  content: '@';
  position: absolute;
  left: -20px;
  filter: opacity(1);
}
</style>
