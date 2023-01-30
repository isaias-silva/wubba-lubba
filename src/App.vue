<template>
  <div class="todo">
    <HeaderComponent />
    <AsideComponent />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AsideComponent from './components/AsideComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
export default defineComponent({
  components: {
    HeaderComponent,
    AsideComponent
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body,
html {
  height: 100%;
  width: 100%;
}
.todo{
  width: 100%;
  display:grid;
  grid-template-areas: "header header header" "aside content content" "aside content content";
  position: relative;
}
.header{
  grid-area: header;

}
.aside{
  grid-area: aside;

}
.content{
  grid-area: content;
  width: 100%;
}
</style>
