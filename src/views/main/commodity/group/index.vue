<template>
  <div class="layout-container">
    <form-handle 
      :condition="condition" 
      :query="query"
      @getTableData="getTableData"
      @handleAdd="handleAdd"  
    />
    <div class="layout-container-tree">
      <div class="block">
        <el-tree
          ref="treeRef"
          :data="dataSource"
          node-key="id"
          :expand-on-click-node="false"
          :props="props"
          lazy 
          @node-expand="getClassifyChildren"
          :default-expanded-keys="openKeys"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span class="tree-handle">
                <a v-if="data.clf_lay<3" @click="setNode(node,data,true)"> 增加子分组 </a>
                <a @click="setNode(node,data,false)"> 编辑 </a>
                <el-popconfirm title="是否删除该分组及其子分组" @confirm="remove(node, data)">
                  <template #reference>
                    <a>删除</a>
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
import { Plus,Search } from '@element-plus/icons'
import { ElMessage } from 'element-plus'
import { classifyQuery,classifyDelete } from '@/api/material/classify'
import FormHandle from '@/components/Form/handle.vue'
import { condition,searchData } from './enum';
import { getData } from '@/utils/transform/httpConfig'

export default defineComponent({
  name: 'materialSort',
  components: {
    Layer,
    FormHandle
  },
  setup() {
    interface Tree {
      id?: string
      _id: string
      clf_type?: number //1:商品,2:半成品,3:销售成品。
      clf_name_link?: string //层级结构名称，如：/水果/苹果/湖南苹果
      clf_lay?: number //分组层级：1-一级分组 2-二级分组 3-三级分组
      clf_name?: string //分组名称
      clf_su_id?: string //上级分组名称。 一级不必传
      leaf?: boolean //是否还有子节点
      children?: Tree[]
    }
    const props = {
      label: 'clf_name',
      children: 'children',
      isLeaf: 'leaf',
    }
    const dataSource = ref<Tree[]>([])
    const query = ref({})
    const openKeys=ref([])
    const getClassifyChildren = (data: Tree,node: Node)=>{
      // if(data.children && data.children.length>0){
      //   return;
      // }
      handleNode = node
      handleData = data
      query.clf_su_id = data._id;
      openKeys.value = [data._id]
      console.log(openKeys.value)
      getClassify().then(data=>{
        data.length>0 ? (handleData.children=data.map(item=>{
          // item.children = item.clf_lay<3 ? [{}] :[]
          item.leaf=item.clf_lay<3?false:true;
          item.id = item._id;
          return item;
        })) : (handleData.leaf=true)
        console.log(data);
        dataSource.value = [...dataSource.value];
        console.log(dataSource.value);
      });
    }
    // 获取子节点
    const getClassify = ()=>{
      const params = getData(searchData,query)
      return classifyQuery(params).then(res=>{
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
    // 增加一级分组
    const handleAdd = ()=>{
      layer.title = '新增分组'
      layer.show = true
      layer.row = setNewRow()
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
        layer.row = setNewRow(data);
        layer.title = '新增分组'
      }else{
        layer.row = data;
        layer.title = '编辑分组'
      }
    }
    const setNewRow = (data:Tree={_id:""})=>{
        return {
          "clf_type": 1, //1:商品,2:半成品,3:销售成品。
          "clf_name_link": data.clf_name_link || "",//层级结构名称，如：/水果/苹果/湖南苹果
          "clf_lay": data.clf_lay ? (data.clf_lay + 1): 1, //分组层级：1-一级分组 2-二级分组 3-三级分组
          "clf_name": "", //分组名称
          "clf_su_id":data._id, //上级分组名称。 一级不必传
        }
    }
    // 新增一级节点
    // const appendIndex = (form: any) => {
    //   initClassify();
    // }
    //新增子节点
    const append = (form: any) => {
      // if(form.clf_lay<3) form.children = [{}]
      form.leaf=form.clf_lay<3?false:true;
      handleData.children.push(form)
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
        ElMessage({
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
      type ? (handleIndex ? initClassify() : append(form)) : edit(form);
    }
    const initClassify=()=>{
      delete query.clf_su_id;
      const params = getData(searchData,query)
      getClassify(params).then(data=>{
        console.log(data);
        data = data.map(item => {
          item.level = 1;
          item.leaf=false;
          item.id = item._id;
          return item
        });
        dataSource.value = data
        console.log(dataSource.value);
      });
    }
    initClassify();
    
    return {
      dataSource,
      layer,
      setNode,
      append,
      // appendIndex,
      edit,
      remove,
      getNodeData,
      Plus,
      Search,
      handleAdd,
      props,
      // loadNode,
      getClassify,
      getClassifyChildren,
      initClassify,
      openKeys,
      condition
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
