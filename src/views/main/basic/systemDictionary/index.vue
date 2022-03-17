<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-input v-model="query.like.dict_name" placeholder="请输入字典中文名" @change="getTableData(true)"></el-input>
        <el-input v-model="query.like.dict_key" placeholder="请输入字典英文名" @change="getTableData(true)"></el-input>
        <el-button :icon="Search" class="search-btn" @click="getTableData(true)">{{ $t('message.common.search') }}</el-button>
        <el-button type="primary" :icon="Plus" @click="handleAdd">{{ $t('message.common.add') }}</el-button>
      </div>
    </div>
    <div class="layout-container-table">
      <Table
        ref="table"
        v-model:page="page"
        v-loading="loading"
        :showIndex="true"
        :showSelection="true"
        :data="tableData"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
      <!-- 字典名称 字典路径 -->
        <el-table-column prop="dict_val_str" label="字典名称" align="center" />
        <el-table-column prop="dict_group" label="字典类型" align="center" />
        <el-table-column prop="dict_type_desc" label="字典类型" align="center" />
        <el-table-column prop="dict_remark" label="备注" align="center" />
        <el-table-column prop="c_create_time" label="创建时间" align="center" />
        <el-table-column :label="$t('message.common.handle')" align="center" fixed="right" width="200">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)">查看</el-button>
            <!-- <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel(scope.row)">
              <template #reference>
                <el-button type="danger">{{ $t('message.common.del') }}</el-button>
              </template>
            </el-popconfirm> -->
          </template>
        </el-table-column>
      </Table>
      <!-- <Drawer :layer="layer" v-if="layer.show" @getTableData="getTableData" /> -->
      <layer :layer="layer" v-if="layer.show" @getTableData="getTableData" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { ElMessage } from 'element-plus'
import { Plus, Search, Delete } from '@element-plus/icons'
import Layer from './layer.vue';
import type { LayerInterface } from '@/components/layer/index.vue'
import { dictQuery,dictDelete, dictInsert,dictFetch,dictValid,dictUpdate } from '@/api/system/dictionary'
import { dict_type_data } from './enum';
export default defineComponent({
  name: 'orderRules',
  components: {
    Table,
    Layer
  },
  setup() {
    // 存储搜索用的数据
    const query = ref({
      // like:{
      //   dict_val_str:"",
      //   dict_group:""
      // }
      eq:{
        //1：字符串类型，2：整数类型，3：布尔类型，4：数组类型，5：对象类型，6：对象数组类型。
         "dict_val_type":5
      },
      like:{
         "dict_group":"",////可选，组名
         "dict_key":"store_status", ////必填，字典键名，英文
         "dict_name":"门店状态" ////必填，字典中文名
      }
    })
    // 弹窗控制器
    const layer: LayerInterface = reactive({
      show: false,
      title: '新增',
      showButton: true,
      width:'30%'
    })
    // 分页参数, 供table使用
    const page: Page = reactive({
      index: 1,
      size: 20,
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
    const getTableData = (init: boolean) => {
      loading.value = true
      if (init) {
        page.index = 1
      }
      let params = {
        start: <number>page.index-1,
        size: page.size,
        ...query.value
      }
      dictQuery(params)
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
    // 删除功能
    const handleDel = (row: object) => {
      let params = {"eq": {"_id": row._id}};
      dictDelete(params)
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
      layer.title = '新增字典'
      layer.show = true
      delete layer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      layer.title='编辑字典'
      layer.show = true
      layer.row = row
    }
    getTableData(true)
    return {
      Plus,
      Search,
      Delete,
      query,
      tableData,
      chooseData,
      loading,
      page,
      handleSelectionChange,
      handleAdd,
      handleEdit,
      handleDel,
      getTableData,
      layer,
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>