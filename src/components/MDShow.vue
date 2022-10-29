<script setup>
  import { marked } from 'marked';
  import { ref } from 'vue';
  import axios from 'axios';
  const mdString = '# 一级标题';
  let htmlString = marked.parse(mdString);
  const htmlObj = ref("")

  function getMD() {
    axios.get('http://localhost:65534/file/md', {
      params: {
        id: 1,
        name: markdownName
      }
    })
    .then((response) => {
      htmlObj = response.data
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    })
  }
</script>

<template>
  <button @click="getMD">获取markdown文件</button>
  <div class="markdown-body" v-html="htmlString"></div>
  <div class="markdown-body" v-html="htmlObj"></div>
</template>

<style lang="css">
 .markdown-body{
    background-color: aquamarine;
    width: 400px;
    height: 200px;
 }
</style>