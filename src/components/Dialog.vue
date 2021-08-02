<template>
  <div>
      <div class="mdialog"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
    name:'dialog'
})
</script>

<style scoped lang='scss'>
.mdialog {
  // position: absolute;
  width: 50px;
  height: 50px;

  background-color: black;
  z-index: 999;
}
</style>