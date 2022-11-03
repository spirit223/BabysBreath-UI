<script setup>
  import Navigation from './components/Navigation.vue';
  import Head from './components/Head.vue';
  import MDShower from './views/MDShower.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Head></Head>
      </el-header>
      <el-container>
        <el-aside>
          <Navigation id="nav"></Navigation>
        </el-aside>
        <el-main>
          <MDShower></MDShower>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="css" scoped>
</style>