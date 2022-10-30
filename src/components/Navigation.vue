<script setup>
  import { ref } from 'vue';
  const navigation = ref('')
</script>

<template>
  <a href="#">
    <slot name="navigationContent">选项卡插槽</slot>
  </a>
</template>

<style lang="css">

</style>