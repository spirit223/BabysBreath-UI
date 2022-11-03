<script setup>
  import {ref, onMounted, computed} from 'vue';
  import NavigationRouter from '../components/NavigationRouter.vue';
  const navigations = ref([
                            {"资源": ['资源选项卡1', '资源选项卡2', '资源选项卡3']},
                            {"文章": ['文章选项卡1', '文章选项卡2', '文章选项卡3']},
                            {"视频": ['视频选项卡1', '视频选项卡2', '视频选项卡3']}
                          ])
  const isShow = ref(false)
  // v-for 渲染出来的每一个 bar 的模板引用
  const barRefs = ref([])
  // 菜单栏索引
  const barIndex = ref(0)
  // 是否展示选项卡路由标志位
  let showRouter = ref(new Array(barRefs.value.length).fill(false));
  onMounted(() => {
    showRouter.value = new Array(barRefs.value.length).fill(false);
  })
  const dynamicClass = computed(() => ({
    'show-nav-router': showRouter.value[barIndex]
  }))

  
  function showNavigation(arrIndex, barKey, event) {
    if(event.target.innerHTML === barKey) {
      // event.currentTarget.nextElementSibling.firstElementChild.className += " showChildren";
      // console.log(event.currentTarget.nextElementSibling);
      const navRouters = document.getElementsByClassName('nav-router-' + arrIndex)
      barIndex.value = arrIndex
      showRouter.value[arrIndex] = !showRouter.value[arrIndex]
      console.log(showRouter.value[arrIndex]);
      // Array.from(navRouters).forEach(element => {
      //   element.className+= " showChildren";
      // })
    }
  }

  const navItem = ref([])
  const navLi = ref()
  function handleNavShow(tab, index, event) {
    console.log("tab ", tab);
    console.log("index ", index);
    console.log("event ", event);
  }
</script>

<template>
  <div id="nav">
    <div v-for="(barObj, arrIndex) of navigations" :key="arrIndex">
      <ul>
        <!-- 导航栏 -->
        <li
          v-for="(barValue, barKey) of barObj" 
          :key="barKey" 
          id="titleBar"
          ref="barRefs"
        >
          <!-- <p @click.stop="(event) => {showNavigation(arrIndex, barKey, event)}"> -->
          <p @click.stop="(event) => {handleNavShow(barKey, arrIndex, event)}">
            {{barKey}}
          </p>
          <ul>
            <!-- 选项卡 -->
            <template v-for="(item, index) of barValue" :key="index">
              <li
                :class="[
                  'nav-router-' + arrIndex,
                  dynamicClass
                ]"
                ref="navLi"
              >
                <NavigationRouter>
                  <template #navigationContent>
                    <div>
                      {{item}}
                    </div>
                  </template>
                </NavigationRouter>
              </li>
            </template>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="css" scoped>
ul li {
  list-style: none;
}

/* 隐藏选项卡 */
.navigation {
  display: none;
}
.show-nav-router {
  display: inline-block !important;
}
#titleBar {
  display: inline-block;
  cursor: pointer;
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