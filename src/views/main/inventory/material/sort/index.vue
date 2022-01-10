<template>
  <div class="layout-container">
    <!-- <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" :icon="Plus" @click="handleAdd">{{ $t('message.common.add') }}</el-button>
      </div>
    </div> -->
    <div class="layout-container-tree">
      <div class="block">
        <el-tree
          :data="dataSource"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span class="tree-handle">
                <a @click="setNode(node,data,true)"> 增加子分类 </a>
                <a @click="setNode(node,data,false)"> 编辑 </a>
                <el-popconfirm title="是否删除该分类" @confirm="remove(node, data)">
                  <template #reference>
                    <a>删除分类</a>
                  </template>
                </el-popconfirm>
              </span>
            </span>
          </template>
        </el-tree>
      </div>
    </div>
    <Layer :layer="layer" @getNodeData="getNodeData" v-if="layer.show" />
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,reactive } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import Layer from './layer.vue'
import type { LayerInterface } from '@/components/layer/index.vue'

export default defineComponent({
  name: 'materialSort',
  components: {
    Layer
  },
  setup() {
    interface Tree {
      id: number
      label: string
      children?: Tree[]
    }
    let id = 1000
    // 弹窗控制器
    const layer: LayerInterface = reactive({
      width:'30%',
      show: false,
      title: '新增',
      showButton: true
    })
    //正在操作的节点
    let handleNode:Node;
    let handleData:Tree
    //节点操作
    const setNode = (node: Node,data: Tree,type:boolean) => {
      // console.log(data);
      handleNode = node;
      handleData = data;
      // layer.title = type?'新增节点':'编辑节点'
      layer.show = true
      if(type){
        delete layer.row;
        layer.title = '新增节点'
      }else{
        layer.row = data;
         layer.title = '编辑节点'
      }
    }
    //新增子节点
    const append = (form: any) => {
      const newChild = { id: id++, children: [],...form }
      if (!handleData.children) {
        handleData.children = []
      }
      handleData.children.push(newChild)
      dataSource.value = [...dataSource.value]
      console.log(dataSource.value);
      
    }
    //编辑节点
    const edit = (form: any) => {
      console.log(form);
      const row = { id: id++, children: [],...form }
      const parent = handleNode.parent
      const children: Tree[] = parent.data.children || parent.data
      const index = children.findIndex((d) => d.id === handleData.id)
      children.splice(index, 1,row)
      dataSource.value = [...dataSource.value]
      console.log(dataSource.value);
    }
    //删除节点
    const remove = (node: Node, data: Tree) => {
      const parent = node.parent
      const children: Tree[] = parent.data.children || parent.data
      const index = children.findIndex((d) => d.id === data.id)
      children.splice(index, 1)
      dataSource.value = [...dataSource.value]
    }
    //编辑或提交
    const getNodeData = (form:any,type:boolean) => {
      type ? append(form) : edit(form);
    }

    const dataSource = ref<Tree[]>([
      {
        id: 0,
        label: '全部物料分类',
        children:[
          {
            id: 1,
            label: '分类 1',
            children: [
              {
                id: 4,
                label: '分类 1-1',
                children: [
                  {
                    id: 9,
                    label: '分类 1-1-1',
                  },
                  {
                    id: 10,
                    label: '分类 1-1-2',
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            label: '分类 2',
            children: [
              {
                id: 5,
                label: '分类 2-1',
              },
              {
                id: 6,
                label: '分类 2-2',
              },
            ],
          },
          {
            id: 3,
            label: '分类 3',
            children: [
              {
                id: 7,
                label: '分类 3-1',
              },
              {
                id: 8,
                label: '分类 3-2',
              },
            ],
          },
        ]
        }
    ])
    return {
      dataSource,
      layer,
      setNode,
      append,
      edit,
      remove,
      getNodeData
    }
  }
})
</script>

<style lang="scss" scoped>

.layout-container-tree{
  margin-top:10px;
  width: 50%;
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;

    .tree-handle{
      color:var(--system-primary-color);
      a{
        margin-left: 10px;
        font-size: 12px;
      }
    }
  }
}

</style>
