<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Logo from './assets/images/logo.png'
import { ref } from 'vue'

const showRouterView = ref(false)
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.logo').classList.add('small')
  }, 500)

  setTimeout(() => {
    document.querySelector('.logo').classList.add('mouv')
  }, 1000)

  setTimeout(() => {
    showRouterView.value = true
    setTimeout(() => {
      document.querySelector('.router-view').classList.add('router-view-active')
    }, 100)
  }, 1500)
})
</script>

<template>
  <main id="wrapper">
    <img :src="Logo" alt="Elden Ring Weapon Wiki" class="logo" />

    <RouterView v-if="showRouterView" class="router-view" />
  </main>
</template>

<style scoped lang="scss">
#wrapper {
  background-color: #00000069;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    width: 95%;
    transition:
      transform 0.5s ease-in-out,
      top 0.3s ease-in-out;
    top: 270px;
    display: flex;
    position: relative;
    &.small {
      transform: scale(0.5);
    }
    &.mouv {
      top: 0;
    }
  }

  .router-view {
    opacity: 0;
    transition: opacity 0.5s ease-in-out; /* Transition en fondu */

    &.router-view-active {
      opacity: 1 !important;
    }
  }
}
</style>
