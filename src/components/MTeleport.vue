<template>
  <div>
      <div class="mHeader" @click="teleport('.mHeader')"></div>
      <div class="mBody" @click="teleport('.mBody')"></div>
      <div class="mFooter" @click="teleport('.mFooter')"></div>
      <teleport :to="position" v-if="position">
          <mDialog />
      </teleport>
  </div>
</template>

<script lang="ts">
// 将teleport 的 children 挂载到属性，to相对应的dom元素中
// 解决了弹窗不准确的问题
import {defineComponent,ref} from "vue";
import mDialog from './Dialog.vue';
export default defineComponent({
    name:'teleport',
    setup(){
        let position = ref('');
        let teleport = (element: string):void => {
            position.value = element;
        };
        return {
            position,
            teleport
        }
    },
    components:{
        mDialog
    }
})
</script>

<style scoped lang='scss'>
.mHeader {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: red;
}
.mBody{
  position: relative;
  width: 100%;
  height: 400px;
  background-color: yellow;
}
.mFooter {
  position: relative;
  width: 100%;
  height: 100px;
  background-color: pink;
}
</style>