<template>
  <Drawer :drawer="parentDict" @confirm="submit">
    <div class="layout-container">
      <div class="layout-container-form flex space-between">
        <!-- <div class="layout-container-form-handle">
          <el-button type="primary" :icon="Plus" @click="handleAdd">{{ $t('message.common.add') }}</el-button>
        </div> -->
        <el-descriptions title="字典组信息" border style="width:50%" :column="2">
          <!-- dict_type,dict_group,_id -->
          <el-descriptions-item label="字典ID">{{parentDict.row._id}}</el-descriptions-item>
          <el-descriptions-item label="字典类型">{{parentDict.row.dict_type_desc}}</el-descriptions-item>
          <el-descriptions-item label="字典组别">{{parentDict.row.dict_group}}</el-descriptions-item>
          <el-descriptions-item label="字典组名称">{{parentDict.row.dict_val_str}}</el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="layout-container-table">
        <div style="line-height:50px;font-weight:bold;">子类信息</div>
        <Table
          ref="table"
          v-model:page="page"
          v-loading="loading"
          :showIndex="true"
          :showSelection="false"
          :data="tableData"
          @getTableData="getTableData"
          @selection-change="handleSelectionChange"
          :showPage="false"
        >
        <!-- 接口名称 接口路径 -->
          <!-- <el-table-column prop="dict_val_str" label="字典名称" align="center" />
          <el-table-column prop="dict_group" label="字典组别" align="center" />
          <el-table-column prop="dict_type_desc" label="字典类型" align="center" /> -->
          <el-table-column prop="_id" label="ID" align="center" />
          <el-table-column prop="dict_key" label="键" align="center" />
          <el-table-column prop="dict_val_str" label="值" align="center" />
          <el-table-column prop="dict_remark" label="备注" align="center" />
          <el-table-column prop="c_create_time" label="创建时间" align="center" />
          <!-- <el-table-column :label="$t('message.common.handle')" align="center" fixed="right" width="300">
            <template #default="scope">
              <el-button @click="handleEdit(scope.row)">{{ $t('message.common.update') }}</el-button>
              <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel(scope.row)">
                <template #reference>
                  <el-button type="danger">{{ $t('message.common.del') }}</el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column> -->
        </Table>
        <Layer :layer="layer" v-if="layer.show" @getTableData="getTableData" />
      </div>
    </div>
  </Drawer>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { ElMessage } from 'element-plus'
import { Plus, Search, Delete } from '@element-plus/icons'
import Layer from './layer.vue';
import Drawer from '@/components/drawer/index.vue';
import type { LayerInterface } from '@/components/layer/index.vue'
import { bizDictDelete, bizDictChildren } from '@/api/project/bizDict'
import { dict_type_data } from './../enum';
export default defineComponent({
  name: 'orderRules',
  components: {
    Table,
    Layer,
    Drawer
  },
  props:{
    parentDict:{
      type: Object,
      default: () => {
          return {
            show: false,
            title:'',
            showButton:true
          }
      }
    }
  },
  setup(props) {
    // 弹窗控制器
    const layer: LayerInterface = reactive({
      show:false,
      title:"编辑接口",
      showButton:true,
      width:'70%'
    })
    // 分页参数, 供table使用
    const page: Page = reactive({
      index: 1,
      size: 10,
      total: 0
    })
    const loading = ref(true)
    const tableData = ref([])
    const chooseData = ref([])
    const handleSelectionChange = (val: []) => {
      chooseData.value = val
    }
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getRow = () => {
      loading.value = true
     const { dict_type,dict_group,_id } = props.parentDict.row
      // bizDictChildren({eq:{ dict_type,dict_group }}).then(res=>{
      //   parentDict.row = res.data;
      //   console.log(parentDict.value)
      // })
      const dict_type_pt = dict_type_data.find(item => item.value === props.parentDict.row.dict_type)
      props.parentDict.row.dict_type_desc = dict_type_pt ?  dict_type_pt.label : props.parentDict.row.dict_type
      bizDictChildren({eq:{ dict_type,dict_group,dict_parent_id:_id }})
      .then(res => {
        console.log(res);
        let data = res.data
        if (Array.isArray(data)) {
          data.forEach(d => {
            const dict_type = dict_type_data.find(item => item.value === d.dict_type)
            d.dict_type_desc = dict_type ?  dict_type.label : d.dict_type
          })
        }
        tableData.value = data
        page.total = res.total
      })
      .catch(error => {
        tableData.value = []
        page.index = 1
        page.total = 0
      })
      .finally(() => {
        loading.value = false
      })
    }
    getRow();
    // 删除功能
    const handleDel = (row: object) => {
      let params = {"eq": {"_id": row._id}};
      bizDictDelete(params)
      .then(res => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        getTableData(tableData.value.length === 1 ? true : false)
      })
    }
    // 新增弹窗功能
    const handleAdd = () => {
      layer.title = '新增接口'
      layer.show = true
      delete layer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      layer.title='编辑接口'
      layer.show = true
      const { dict_type,dict_group } = row
      bizDictChildren({eq:{ dict_type,dict_group }}).then(res=>{
        layer.row = res.data;
        console.log(layer.value)
      })
    }
    return {
      Plus,
      Search,
      Delete,
      tableData,
      chooseData,
      loading,
      page,
      handleSelectionChange,
      handleAdd,
      handleEdit,
      handleDel,
      getRow,
      layer,
    }
  }
})
</script>

<style lang="scss" scoped>
</style>