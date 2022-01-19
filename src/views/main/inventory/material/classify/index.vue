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
          :expand-on-click-node="false"
          :props="props"
          @node-expand="getClassifyChildren"
          render-after-expand
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
import { classifyQuery,classifyDelete } from '@/api/material/classify'

export default defineComponent({
  name: 'materialSort',
  components: {
    Layer
  },
  setup() {
    interface Tree {
      _id: string
      clf_name: string
      leaf?:boolean //是否还有子节点
      children?: Tree[]
    }
    const props = {
      label: 'clf_name',
      children: 'children',
      isLeaf: 'leaf',
    }
    // const loadNode = (node: Node, resolve: (data: Tree[]) => void) => {
    //   if (node.level === 0) {
    //     return getClassify().then(data=>{
    //       console.log(data);
    //       resolve(data);
    //     });
    //   }
    //   if (node.level > 3) return resolve([])
      
    //   return getClassify(node.data._id).then(data=>{
    //     console.log(data);
    //     resolve(data)
    //   });
    // }
    const getClassifyChildren = (data: Tree,node: Node)=>{
      handleNode = node
      handleData = data
      getClassify(data._id).then(data=>{
        handleData.children=data;
        console.log(data);
        dataSource.value = [...dataSource.value];
        console.log(dataSource.value);
      });
    }
    // 获取子节点
    const getClassify = (clf_su_id="")=>{
      return classifyQuery({eq:{clf_su_id}}).then(res=>{
        return Promise.resolve(res.data);
      })
    }

    let id = 1000
    // 弹窗控制器
    const layer: LayerInterface = reactive({
      width:'30%',
      show: false,
      title: '新增',
      showButton: true
    })
    let handleIndex = false //正在操作根节点
    // 增加一级分类
    const handleAdd = ()=>{
      layer.title = '新增一级分类'
      layer.show = true
      delete layer.row
      handleIndex = true
    }
    //正在操作的节点
    let handleNode:Node
    let handleData:Tree
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
      const row = { ...form }
      const parent = handleNode.parent
      const children: Tree[] = parent.data.children || parent.data
      const index = children.findIndex((d) => d.id === handleData.id)
      children.splice(index, 1,row)
      dataSource.value = [...dataSource.value]
      console.log(dataSource.value);
    }
    //删除节点
    const remove = (node: Node, data: Tree) => {
      classifyDelete({eq:{_id:data._id}}).then(res=>{
        this.$message({
          type: 'success',
          message: '删除成功'
        })
        const parent = node.parent
        const children: Tree[] = parent.data.children || parent.data
        const index = children.findIndex((d) => d.id === data.id)
        children.splice(index, 1)
        dataSource.value = [...dataSource.value]
      })
    }
    //编辑或提交
    const getNodeData = (form:any,type:boolean) => {
      type ? (handleIndex ? appendIndex(form) : append(form)) : edit(form);
    }
    const dataSource = ref<Tree[]>([])
    const filterText = ref('')
    const treeRef = ref<InstanceType<typeof ElTree>>()
    const getTree=()=>{
      treeRef.value!.filter(filterText.value)
    }
    const initClassify=()=>{
      getClassify().then(data=>{
        console.log(data);
        data = data.map(item => {
          item.level = 1;
          item.children = [{}];
          item.leaf=false;
          return item
        });
        dataSource.value = data
        console.log(dataSource);
      });
    }
    initClassify();
    
    return {
      dataSource,
      layer,
      setNode,
      append,
      appendIndex,
      edit,
      remove,
      getNodeData,
      Plus,
      handleAdd,
      filterText,
      getTree,
      props,
      // loadNode,
      getClassify,
      getClassifyChildren
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
