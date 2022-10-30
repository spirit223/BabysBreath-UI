<script setup>
/**
 * 修改全局依赖注入的 url, 完成通信
 */
  import { inject } from 'vue';
  const url = inject('mdURL')

  function changeURL() {
    url.value = 'http://ironcentury.cc/externalLinksController/chain/reflect.md?ckey=n%2FcB2gp9JouvTsRYMkC1ULiQRHpnk5Uo0Zt8YkdewNYbrinafS1or5Gd3KO6cnuz'
  }
</script>

<template>
  <div>
    <button @click="changeURL">更换文档</button>
  </div>
</template>

<style lang="css">

</style>