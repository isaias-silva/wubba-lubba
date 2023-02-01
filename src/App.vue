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

body::-webkit-scrollbar {
  display: none;
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
  height: 100vh;
  overflow-y: scroll;
  background-image: url('https://gkpb.com.br/wp-content/uploads/2022/11/rick-morty-ultimos-episodios1-scaled-e1667923673907.jpg');
  background-size: cover;
  position: relative;
  z-index: -1;
}

.content::after {
  content: '';
  width: 100%;
  display: block;
  position: absolute;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.619);
  top: 0;
  z-index: -1;
}

.post {
  color: #fff;
  background: rgba(13, 13, 13, 0.739);
  width: 80%;
  margin: auto;
  margin-top: 10px;
  padding: 5px;
  border-radius: 10px;
  height: auto;
  display: grid;
  grid-template-areas:"title title title" "text text image" "text text image";
}

.post h2 {
  grid-area: title;
  font-size: 24px;
  margin-bottom: 10px;
}

.post .item {
  grid-area: text;
  margin: 5px;
}

.post .imagefloat {
  width: 90%;
  margin: 5px;
  grid-area: image;
  border-radius: 10px;
}
</style>
