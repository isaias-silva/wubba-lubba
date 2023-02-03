<template>
  <div class="post">
    <h2>{{ infoCharacters.length }} characters registred</h2>
  </div>
  <div class="post" v-for="(infoCharacter,key) in infoCharacters" :key="key">
    <h2>{{ infoCharacter.name }}</h2>
    <img :src="infoCharacter.image" />
    <div class="block">
      <h3>gender: </h3> <span>{{ infoCharacter.gender }}</span>
      <h3>type: </h3> <span>{{ infoCharacter.type || 'N/A' }}</span>
      <h3>species: </h3> <span>{{ infoCharacter.species }}</span>
      <h3>status: </h3> <span>{{ infoCharacter.status }}</span>
      <h3>origin: </h3> <span>{{ infoCharacter.origin }}</span>
      <h3>location: </h3> <span>{{ infoCharacter.location }}</span>
    </div>
  </div>

</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'allcharactersPage',
  data (): {
    infoCharacters: {
      id: null | string | undefined,
      name: string | null | undefined,
      gender: string | null | undefined,
      image: string | undefined,
      species: string | null | undefined,
      status: string | null | undefined,
      type: string | null | undefined,
      location: string | null | undefined,
      origin: string | null | undefined
    }[]} {
    return {
      infoCharacters: []
    }
  },
  mounted () {
    this.setCharacters()
  },
  methods: {
    async setCharacters () {
      for (let i = 0; i < 42; i++) {
        await axios.get(`https://rickandmortyapi.com/api/character/?page=${i}`).then((response) => {
          // eslint-disable-next-line array-callback-return
          response.data.results.map((value: any) => {
            const { id, name, gender, image, species, status, type, location, origin } = value
            const objCharacter = { id, name, gender, image, species, status, type, location: location.name, origin: origin.name }
            this.infoCharacters.push(objCharacter)
          })
        })
      }
    }
  }
})
</script>
<style>
.block {
  display: grid;
  grid-template-columns: 40% 60%;
}

.block h3 {
  color: #00ff00;
}
</style>
