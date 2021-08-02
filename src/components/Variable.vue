<template>
  <p class="text">mkyx</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'variable',
  data(){
      return {
          color: "yellow"
      }
  }
})
</script>
<style scoped lang="scss">
/* 
    最新提案： 使用v-bind 代替 vars="{ color }" 
*/
/*
    css变量是什么？
       css 变量又称为css自定义属性，它包含的值可以在整个文档中重复使用。
    vue3 新增 v-bind（上一版是vars），和 scoped 一起使用，增强作用域，会自定加上随机id --119754ac-color
    
    使用css变量的目的就是可以和js更好的通信
*/
.text{
    color: v-bind(color);
}
</style>
