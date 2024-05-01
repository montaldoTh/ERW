<script setup>
import test1 from '../assets/images/test1.jpg'
import test2 from '../assets/images/test2.jpg'

import { useWeaponStore } from '../stores/weapon.js'
const weaponsStore = useWeaponStore();

const getAllWeapons = () => {
  weaponsStore.getAllWeapons()
}

const getWeapon = (id) => {
  weaponsStore.getWeapon(id)
}

getAllWeapons()
</script>

<template>
  <main>
    <div id="container">
      <div class="weapon">
        <img :src="test1" class="weapon-img" />
      </div>
      <div class="weapon">
        <img :src="test2" class="weapon-img" />
      </div>
      <div class="weapon">
        <img :src="test1" class="weapon-img" />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
}
.weapon {
  flex: 0 0 calc(33.333% - 20px);
  max-width: calc(33.333% - 20px);
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
}
img {
  width: 100%;
}
</style>
