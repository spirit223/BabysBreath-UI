<script setup>
  import MarkdownIt from 'markdown-it';
  import { ref } from 'vue';
  import axios from 'axios';
  import hljs from 'highlight.js';
  const mdRender = new MarkdownIt({
    // 语法高亮
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value;
        } catch (__) {}
      }
      return ''; // use external default escaping
    }
  });
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
pre {
  padding: 5px;
  border-radius: 5px;
  width: 400px;
  overflow: auto;
  background-color: rgba(20, 20, 20, 0.2);
}
 .markdown-body{
    /* width: 400px; */
 }
</style>