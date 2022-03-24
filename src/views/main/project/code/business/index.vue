<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-input v-model="query.like.dict_group" placeholder="请填写字典名称" @change="getTableData(true)"></el-input>
        <el-input v-model="query.like.dict_val_str" placeholder="请填写字典类型" @change="getTableData(true)"></el-input>
        <el-button :icon="Search" class="search-btn" @click="getTableData(true)">{{ $t('message.common.search') }}</el-button>
        <!-- <el-button type="primary" :icon="Plus" @click="handleAdd">{{ $t('message.common.add') }}</el-button> -->
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
      <!-- <Drawer :parentDict="parentDict" v-if="parentDict.show" @getTableData="getTableData" /> -->
      <Detail :parentDict="parentDict" v-if="parentDict.show" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { ElMessage } from 'element-plus'
import { Plus, Search, Delete } from '@element-plus/icons'
import Detail from './detail/index.vue';
import type { DrawerInterface } from '@/components/parentDict/index.vue'
import { bizDictQuery,bizDictDelete, bizDictRow } from '@/api/project/bizDict'
import { dict_type_data } from './enum';
export default defineComponent({
  name: 'orderRules',
  components: {
    Table,
    Detail
  },
  setup() {
    // 存储搜索用的数据
    const query = ref({
      like:{
        dict_val_str:"",
        dict_group:""
      }
    })
    // 弹窗控制器
    const parentDict: DrawerInterface = reactive({
      show:false,
      title:"查看字典",
      showButton:false,
      width:'70%'
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
      bizDictQuery(params)
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
      parentDict.title = '新增字典'
      parentDict.show = true
      delete parentDict.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      parentDict.title='编辑字典'
      parentDict.show = true
      parentDict.row = row
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
      parentDict,
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>