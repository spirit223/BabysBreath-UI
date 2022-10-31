<script setup>
  /**
   * 导航栏
   */
  import NavigationRouter from '../components/NavigationRouter.vue';
  import {ref} from 'vue';
  const navigations1 = ref(['资料选项卡1', '资料选项卡2', '资料选项卡3'])
  const navigations2 = ref(['文章选项卡1', '文章选项卡2', '文章选项卡3'])
  const navigations3 = ref(['视频选项卡1', '视频选项卡2', '视频选项卡3'])
</script>

<template>
  <div id="nav">
    <p>navigations1</p>
    <ul>
      <li v-for="(item, index) of navigations1" :key="index">
        <NavigationRouter>
          <template #navigationContent>
            <div>
              {{item}}
            </div>
          </template>
        </NavigationRouter>
      </li>
    </ul>

    <p>navigations2</p>
    <ul>
      <li v-for="(item, index) of navigations2" :key="index">
        <NavigationRouter>
          <template #navigationContent>
            <div>
              {{item}}
            </div>
          </template>
        </NavigationRouter>
      </li>
    </ul>

    <p>navigations3</p>
    <ul>
      <li v-for="(item, index) of navigations3" :key="index">
        <NavigationRouter>
          <template #navigationContent>
            <div>
              {{item}}
            </div>
          </template>
        </NavigationRouter>
      </li>
    </ul>
    
  </div>
</template>

<style lang="css" scoped>
ul li {
  list-style: none;
}

a{
  color: #fff;
  display: inline-block;
  width: 256px;
  background-color: #1D6A47;
  border-radius: 10px;
  text-align: center;
  padding: 5px 15px;
  margin: 3px 2px;
  transition: .2s ease-in-out;
}
a:hover {
  margin-top: 6px;
  margin-bottom: 6px;
  width: 280px;
  height: 30px;
  border-radius: 30px;
  text-align: center;
  line-height: 30px;
  box-shadow: 5px 5px 7px 1px rgb(0 0 0 / 20%);
  transition: .2s ease-in-out;
}

/* 整体部分 */
#nav {
  padding: 8px;
  /* border: #F9F871 2px solid; */
  border-bottom: 0px;
  /* border-left: var(--user-border-color) 15px solid; */
  box-sizing: content-box;
  /* background-color: #fe275d60; */
  
  position: fixed;
  top: 44px;
  width: 26%;
  height: 100%;
}

/* 菜单栏 */
p {
  position: relative;
  padding-left: 5px;
  padding-right: 3px;
  margin-top: 14px;
  margin-bottom: 14px;
  background-color: #00c9b7;
  color: #fff;
  font-weight: 900;
  line-height: 40px;
  width: 180px;
  height: 50px;
  line-height: 50px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 10px 10px 14px 1px rgb(0 0 0 / 20%);
}
p:hover {
  box-shadow:none;
  margin-bottom: 5px;
  transition: .2s;
}
/* 菜单栏字体图标 */
p::before {
  content: "\ef8c";

  position: absolute;
  left: 16px;

  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* 菜单栏箭头 */
p::after {
  position: absolute;
  top: 20px;
  right: 20px;
  content: "";
  width: 8px;
  height: 8px;
  border-bottom: #fff 2px solid;
  border-right: #fff 2px solid;
  transform: rotate(-45deg);
}
p:hover::after {
  position: absolute;
  top: 18px;
  right: 18px;
  transform: rotate(45deg);
  transition: 0.2s;
}

</style>