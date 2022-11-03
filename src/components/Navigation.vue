<script lang="ts" setup>
import {Edit, Lock} from "@element-plus/icons-vue/dist/types";

interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree):void => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
const nodeKeys: number[] = [1,2,3]

const defaultProps = {
  children: 'children',
  label: 'label',
}

</script>

<template>
  <el-tree
    id="nav"
    :data="data"
    :props="defaultProps"
    icon="Lock"
    node-key="nodeKeys"
    accordion
    @node-click="handleNodeClick"
  >
  </el-tree>
  
</template>

<style>
  /* #nav {
    width: 13rem;
    position: fixed;
    border: 3px var(--bd-color) solid;
  } */
</style>

<style lang="scss">
  .el-tree-node {
  }
</style>
