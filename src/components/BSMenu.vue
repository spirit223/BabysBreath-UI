<script setup>
  import {ref, computed, onMounted} from 'vue';
  import NavigationRouter from './NavigationRouter.vue';
  // @todo 上线前将两个数组内容移除, 但保留数组长度供初始化
  const arrClassify = ref(["资源", "文章", "视频"])
  const arrLabel = ref([
    ['资源选项卡1', '资源选项卡2', '资源选项卡3'], 
    ['文章选项卡1', '文章选项卡2', '文章选项卡3'],
    ['视频选项卡1', '视频选项卡2', '视频选项卡3']
  ])
  // 获取所有的li, 分类到数组中, 然后进行统一管理
  const arrItems = ref([])
  function handlerList(event) {
    // 当前点击元素的下一个元素, 点击p就是ul
    // console.log(event.target.nextElementSibling.style);
    event.target.nextElementSibling.style.display='none';
  }
  // 展示标志
  const arrFlag = ref(new Array(arrClassify.value.length).fill(false))
  // 样式绑定
  const bindIndex = 0
  // 显示隐藏选项处理
  function handleTileClick(classifyIndex, event) {

    for (let index = 0; index < arrFlag.value.length; index++) {
      if(index === classifyIndex) {
        // 点击的元素取反
        arrFlag.value[classifyIndex] = !arrFlag.value[classifyIndex]
        continue
      }
      arrFlag.value[index] = false
    }
  }

</script>

<template>
  <div class="bs-nav">
      <!-- 循环渲染分类 -->
      <TransitionGroup  name="list" tag="div">
        <div 
          v-for="(classify, classifyIndex) of arrClassify" 
          :key="classifyIndex"
          :ref="el => {bindIndex++}"
          class="container-box"
          :class="{'bs-container-box-showing': arrFlag[classifyIndex]}"
        >
          <!-- 分类标题 -->
          <p 
            class="bs-menubar-title"
            :class="[{'bs-menubar-title-showing': arrFlag[classifyIndex]}, {'bs-menubar-title-showing::after': arrFlag[classifyIndex]}]"
            @click="event => {handleTileClick(classifyIndex, event)}"
          >
            {{classify}}
          </p>
          <!-- 列表循环渲染子项 -->
          <Transition>
            <ul v-if="arrFlag[classifyIndex]">
              <li 
                v-for="(label, labelIndex) of arrLabel[classifyIndex]" 
                :key="labelIndex"
                :ref="el => {arrItems.push(el)}"
                class="bs-menu-item"
                :class="'bs-menu-item-' + classifyIndex"
              >
                <!-- 导航项显示的内容 -->
                {{label}}
              </li>
            </ul>
          </Transition>
        </div>
      </TransitionGroup>
  </div>
</template>

<style lang="css">
  .bs-nav {
    position: fixed;
    margin-top: 44px;
  }

  .bs-container-box-showing {
    height: 190px;
  }
  
  /* 栏目左侧图标 */
  .bs-menubar-title::before{
    content: "\ef8c";
    position: absolute;
    left: 16px;

    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  /* 栏目样式: 颜色, 阴影, 圆角, 相对定位 */
  .bs-menubar-title {
    display: flex;
    flex-direction: column;
    justify-content: space-around ;
    position: relative;
    padding-left: 5px;
    padding-right: 3px;
    margin: 14px 0px;
    margin-left: 5px;
    font-weight: bolder;
    line-height: 50px;
    width: 180px;
    height: 50px;
    border-radius: 25px;
    text-align: center;
    background-color: var(--preset-bs-purple);
    color: #fff;
    transition: .5s ease-in-out;
  }
  /* 栏目右侧箭头: 提示点击下拉 */
  .bs-menubar-title::after {
    position: absolute;
    top: 20px;
    right: 20px;
    content: "";
    width: 8px;
    height: 8px;
    border-bottom: #fff 2px solid;
    border-right: #fff 2px solid;
    transform: rotate(-45deg);
    transition: 0.3s;
  }
  /* 栏目鼠标悬停: 取消阴影, 过渡时长, 缩小外边距 */
  .bs-menubar-title:hover {
    /* box-shadow:none; */
    box-shadow: 10px 10px 14px 1px rgb(0 0 0 / 20%);
    margin-bottom: 14px;
    transition: .2s;
  }
  /* 栏目右侧鼠标悬停样式: 修改旋转角度 */
  .bs-menubar-title:hover::after {
    transform: rotate(45deg);
  }
  /* 栏目展开时的样式 */
  .bs-menubar-title-showing {
    box-shadow: 10px 10px 14px 1px rgb(0 0 0 / 20%);
    margin-bottom: 14px;
    transition: .2s;
  }
  .bs-menubar-title-showing::after {
    transform: rotate(45deg);
    transition: .2s ease-in-out;
  }
  .bs-menubar-title-hidden::after {
    transform: rotate(-45deg);
    transition: .2s ease-in-out;
  }

  /* 选项卡样式: 鼠标样式, 颜色, 圆角, 大小, 过渡时长 */
  .bs-menu-item {
    display: inline-block;
    cursor: pointer;
    background-color: var(--perset-bs-shallowpurple);
    width: 256px;
    border-radius: 30px;
    text-align: center;
    padding: 5px 15px;
    margin: 3px 0px;
    margin-left: 15px;
    transition: .3s ease-in-out;
  }
  /* 选项卡鼠标悬停样式: 位移, 圆角, 阴影 */
  .bs-menu-item:hover {
    margin-top: 6px;
    margin-bottom: 6px;
    width: 280px;
    height: 30px;
    border-radius: 30px;
    text-align: center;
    line-height: 30px;
    box-shadow: 5px 5px 7px 1px rgb(0 0 0 / 20%);
  }
  .container-box {
    width: 200px;
  }

  /* 控制组件显示和移除时的动画 */
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  .list-move, /* 对移动中的元素应用的过渡 */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* 确保将离开的元素从布局流中删除
    以便能够正确地计算移动的动画。 */
  .list-leave-active {
    position: absolute;
  }
</style>