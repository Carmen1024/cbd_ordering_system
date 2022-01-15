<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" :icon="Plus" @click="handleAdd">新增分类</el-button>
      </div>
      <div class="layout-container-form-search">
        <el-input v-model="filterText" placeholder="请输入分类名" />
        <el-button type="primary" :icon="Search" class="search-btn" @click="getTree">{{ $t('message.common.search') }}</el-button>
      </div>
    </div>
    <div class="layout-container-tree">
      <div class="block">
        <el-tree
          ref="treeRef"
          :data="dataSource"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :filter-node-method="filterNode"
          :props="{ class: customNodeClass }"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span class="tree-handle">
                <a @click="setNode(node,data,true)"> 增加子分类 </a>
                <a @click="setNode(node,data,false)"> 编辑 </a>
                <el-popconfirm title="是否删除该分类及其子分类" @confirm="remove(node, data)">
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
import { defineComponent,ref,reactive,watch } from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'
import Layer from './layer.vue'
import type { LayerInterface } from '@/components/layer/index.vue'
import { Plus } from '@element-plus/icons'
import type { ElTree } from 'element-plus'
import { log } from 'console'

export default defineComponent({
  name: 'materialSort',
  components: {
    Layer
  },
  setup() {
    interface Tree {
      id: number
      isIndex?:boolean
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
    let handleNode:Node
    let handleData:Tree
    let handleIndex = false //正在操作根节点
    // 增加一级分类
    const handleAdd = ()=>{
      layer.title = '新增一级分类'
      layer.show = true
      delete layer.row
      handleIndex = true
    }

    //节点操作
    const setNode = (node: Node,data: Tree,type:boolean) => {
      console.log(node,data);
      handleIndex = false
      handleNode = node
      handleData = data
      // layer.title = type?'新增节点':'编辑节点'
      layer.show = true
      if(type){
        delete layer.row;
        layer.title = '新增分类'
      }else{
        layer.row = data;
        layer.title = '编辑分类'
      }
    }
    // 新增一级节点
    const appendIndex = (form: any) => {
      const newChild = { id: id++, children: [],...form }
      dataSource.value.push(newChild)
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
      type ? (handleIndex ? appendIndex(form) : append(form)) : edit(form);
    }
    const customNodeClass = (data: Tree, node: Node) => {
      if (data.isIndex) {
        return 'isIndex'
      }
      return `class_${data.id}`
    }
    const dataSource = ref<Tree[]>([
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
    ])
    const filterText = ref('')
    const treeRef = ref<InstanceType<typeof ElTree>>()
    const getTree=()=>{
      treeRef.value!.filter(filterText.value)
    }
    const filterNode = (value: string, data: Tree) => {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
    return {
      dataSource,
      layer,
      setNode,
      append,
      appendIndex,
      edit,
      remove,
      getNodeData,
      customNodeClass,
      Plus,
      handleAdd,
      filterText,
      getTree,
      filterNode
    }
  }
})
</script>

<style lang="scss">

.layout-container-tree{
  margin-top:10px;
  width: 50%;
  .el-tree-node__content{
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
}

</style>
