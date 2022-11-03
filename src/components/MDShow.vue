<script setup>
  /**
   * 渲染markdown文档
   */
  import MarkdownIt from 'markdown-it';
  import { ref, inject, onMounted, watch } from 'vue';
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
  const mdURL = inject('mdURL')
  
  onMounted( () => {
    axios.get(mdURL.value)
    .then((response) => {
      htmlObj.value = mdRender.render(response.data)
    })
  } )
  /* 监听注入的url变化修改文档渲染 */
  watch(mdURL, async (newQuestion, oldQuestion) => {
    axios.get(newQuestion)
    .then((response) => {
      htmlObj.value = mdRender.render(response.data)
    })
    .catch((error) => {
      console.error(error);
    })
  }) 
</script>

<template>
  <div id="rootDiv">
    <div class="markdown-body">
      <div v-html="htmlObj"></div>
    </div>
  </div>
</template>

<style lang="css" scoped>
#rootDiv {
  position: relative;
}
.markdown-body {
  position: absolute;
  top: 44px;
  right: 0;
  /* margin-top: 44px; */
  z-index: -9999;
  /* border-left: #B5B5B5 20px solid; */
  background-color: var(--preset-bs-white);
  padding: 20px;
  width: 80%;
  overflow: auto;
}
.markdown-body pre code {
  padding: 5px;
  border-radius: 5px;
  width: 400px;
  overflow: auto;
  background-color: rgba(20, 20, 20);
}

</style>