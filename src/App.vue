<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <!-- <m-teleport></m-teleport> -->
  <Variable />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import mTeleport from '_c/MTeleport.vue'
import Variable from '_c/Variable.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    mTeleport,
    Variable
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
