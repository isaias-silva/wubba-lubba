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

.todo {
  width: 100%;
  display: grid;
  height: 100%;
  grid-template-areas: "header header header header" "aside conten conten conten";
  grid-template-columns: 10% auto auto;
  grid-template-rows: auto 100vh auto;
  position: relative;
}

.header {
  grid-area: header;

  top: 0;
}

.aside {
  grid-area: aside;

}

.content {
  grid-area: conten;
  background-color: rgb(58, 58, 58);
  width: 100%;
  min-height: 100vh;
}
</style>
