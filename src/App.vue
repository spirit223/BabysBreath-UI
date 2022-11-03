<script setup>
  import MDShow from './components/MDShow.vue';
  import Head from './views/Head.vue';
  import NavigationBar from './views/NavigationBar.vue';
  import BSMenu from './components/BSMenu.vue';
</script>

<template>
  <div>
      <!-- 页头 -->
    <header>
      <Head></Head>
    </header>
    
    <!-- 左侧导航栏 -->
    <nav>
      <BSMenu></BSMenu>
    </nav>
    <!-- 主体 -->
    <main id="rootDiv">
      <!-- 右侧md渲染 -->
      <article>
        <MDShow></MDShow>
      </article>
    </main>
    <!-- 页脚 -->
    <footer></footer>
  </div>
</template>

<style>
body {
  background-color: var(--preset-bs-whitepurple);
}
</style>
