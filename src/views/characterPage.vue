<template>
    <div class="post">
        <h2>{{ infoCharacter.name }}</h2>
        <img :src="infoCharacter.image" />
        <div class="block">
           <h3>gender: </h3> <span>{{ infoCharacter.gender }}</span>
           <h3>type: </h3>  <span>{{ infoCharacter.type || 'N/A'}}</span>
           <h3>species: </h3> <span>{{ infoCharacter.species }}</span>
           <h3>status: </h3>  <span>{{ infoCharacter.status }}</span>
           <h3>origin: </h3>  <span>{{ infoCharacter.origin }}</span>
           <h3>location: </h3>  <span>{{ infoCharacter.location }}</span>
        </div>
    </div>

</template>
<script lang="ts">
import axios from 'axios'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'characterPage',
  data (): {infoCharacter:{id:null|string|undefined,
     name:string|null|undefined,
     gender:string|null|undefined,
     image:string|undefined,
     species:string|null|undefined,
     status:string|null|undefined,
     type:string|null|undefined,
     location:string|null|undefined,
     origin:string|null|undefined} } {
    return {
      infoCharacter: {
        id: null,
        name: null,
        gender: null,
        image: undefined,
        species: null,
        status: null,
        type: null,
        location: null,
        origin: null
      }
    }
  },

  updated () {
    const query = this.$route.query.id?.toString()
    axios.get(`https://rickandmortyapi.com/api/character/${query}`).then((response) => {
      const { name, gender, image, species, status, type, location, origin } = response.data
      this.infoCharacter = { id: query, name, gender, image, species, status, type, location: location.name, origin: origin.name }
    })
  },
  created () {
    const query = this.$route.query.id?.toString()
    axios.get(`https://rickandmortyapi.com/api/character/${query}`).then((response) => {
      const { name, gender, image, species, status, type, location, origin } = response.data
      this.infoCharacter = { id: query, name, gender, image, species, status, type, location: location.name, origin: origin.name }
    })
  }
})
</script>
<style>
.block{
    display: grid;
    grid-template-columns: 40% 60%;
}
.block h3{
    color: #00ff00;
}
</style>
