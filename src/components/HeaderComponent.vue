<template>
    <div class="header">
        <div class="logo">
            <img src="../assets/logo.png" alt="logo">
            <h1>wubbaLuba</h1>
            <span>{{ message }}</span>
        </div>
        <div class="menu">
            <input type="checkbox" id="checker">
            <label for="checker">
                <span></span>
                <span></span>
                <span></span>
            </label>
            <ul>
               <li>
                <router-link to="/">home</router-link>
               </li>
               <li>
                <router-link to="/episodes">episodes</router-link>
               </li>
               <li>
                <router-link to="/characters">all characters</router-link>
               </li>
               <li>
                <a href="https://github.com/isaias-silva/wubba-lubba" target="_blank" rel="noopener noreferrer">github</a>
               </li>
               <li>
                <a href="https://github.com/isaias-silva" target="_blank" rel="noopener noreferrer">creator</a>
               </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data ():{message:string} {
    return {
      message: 'a rickpage for rickpeople'
    }
  },
  methods: {
    setMessage (value:string) {
      this.message = value
    }
  }
})
</script>
<style scoped>
.header{
    color: #fff;
    background:rgb(20, 20, 20);
    display: grid;
    width: 100%;
    grid-template-areas: "logo logo opcoes";
    grid-template-columns:70% 10% ;
    border-bottom: 2px solid rgb(0, 255, 0);
}
.logo{
    grid-area: logo;
    display: grid;
    grid-template-areas: "image title " "image legenda ";
    grid-template-columns:10% 50% ;
}
.logo h1{
    grid-area: title;
    text-shadow: 2px 2px 10px rgba(25, 249, 25);
}
.logo img{
    grid-area: image;
    width: 70px;
    border-radius: 100%;
    background-color: greenyellow;
    box-shadow: 0px 0 10px green;
    box-sizing: border-box;

}
.logo span{
    grid-area: legenda;
    width: 100%;
    display: block;
}
.menu{
    grid-area: opcoes;
    position: relative;

}

.menu input[type='checkbox']{
    display: none;
}
.menu label{
    width: 40px;
    grid-area: menu;
    position: absolute;
    right: 0;
}
.menu label span{
    display: block;
    position: relative;
    width: 80%;
    height: 4px;
    margin: 5px;
    background-color: greenyellow;
    transition: 0.1s linear;
    border-radius: 10px;
    right: 10px;
}
.menu label:hover span {
    background-color: green;
    cursor: pointer;
}
#checker:checked~ label span:nth-child(1){
rotate: 45deg;
top: 10px;
right: 5px;

}
#checker:checked~ label span:nth-child(3){
    rotate: -45deg;
    right:7px;
    top:-7px;
}
#checker:checked~ label span:nth-child(2){
opacity: 0;
}
#checker:checked~ ul{
    display:block;
}
.menu ul{
    grid-area: list;
    list-style: none;
    position: absolute;
    right: 0;
    top:65px;
    width: 100%;
    background-color: rgb(20, 20, 20);
    border-radius: 5px;
    display:none;
    z-index: 1000 !important;
}
.menu ul li{
    border-bottom: 1px solid #fff;
    padding-top: 5px;
    padding-bottom: 5px;
}
.menu ul li a{
    color: #fff;
    text-decoration: none;
}
.menu ul li a:hover{
    color: rgb(51, 255, 0);
}
</style>
