<script setup>
  import MarkdownIt from 'markdown-it';
  import { ref } from 'vue';
  import axios from 'axios';
  const mdString = '# 一级标题';
  const mdRender = new MarkdownIt('commonmark');
  // mdRender.render(mdString)
  const htmlObj = ref(null)

  function getMDTest() {
    axios.get('http://ironcentury.cc/externalLinksController/chain/JWT.md?ckey=4xDG2Rqywh1cezE8sfzIFZho6n1PcVjWf4wbIICatFmXOigPkB%2BpcqiZYb6WpcTv')
      .then((response) => {
        htmlObj.value = mdRender.render(response.data)
      })
  }

  
</script>

<template>
  <button @click="getMDTest">获取markdown文件</button>
  <!-- <div class="markdown-body" v-html="htmlString"></div> -->
  <div class="markdown-body" v-html="htmlObj"></div>
</template>

<style lang="css">
 .markdown-body{
    /* width: 400px; */
 }
</style>