<script setup>
  import { marked } from 'marked';
  import { ref } from 'vue';
  const mdString = '# 一级标题';
  let htmlString = marked.parse(mdString);
  const htmlObj = ref({htmlString})
</script>

<template>
  <div class="markdown-body" v-html="htmlString"></div>
  <div class="markdown-body" v-html="htmlObj.value"></div>
</template>

<style lang="css">
 .markdown-body{
  background-color: aquamarine;
  width: 400px;
  height: 200px;
 }
</style>