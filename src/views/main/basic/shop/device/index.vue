<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
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
        :columnData="columnData"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column :label="$t('message.common.handle')" align="center" fixed="right" width="200">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)">{{ $t('message.common.update') }}</el-button>
            <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel([scope.row])">
              <template #reference>
                <el-button type="danger">{{ $t('message.common.del') }}</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </Table>
      <Layer :layer="layer" @getTableData="getTableData" v-if="layer.show" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { getData, del } from '@/api/table'
import Layer from './layer.vue'
import { ElMessage } from 'element-plus'
import type { LayerInterface } from '@/components/layer/index.vue'
import { selectData, dateData } from './enum'
import { Plus, Search, Delete } from '@element-plus/icons'
export default defineComponent({
  name: 'crudTable',
  components: {
    Table,
    Layer
  },
  setup() {
    // 存储搜索用的数据
    const query = reactive({
      input: ''
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
    const columnData = ref([
      {prop:'name',label:"设备Key",width:""},
      {prop:'name',label:"激活状态",width:""},
      {prop:'name',label:"联机状态",width:""},
      {prop:'name',label:"可见状态",width:""},
      {prop:'name',label:"所属门店",width:"300"},
      {prop:'name',label:"LOT平台",width:""},
      {prop:'name',label:"SN编码",width:"200"},
      {prop:'name',label:"设备型号",width:""},
      {prop:'name',label:"打印任务",width:""},
    ])
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getTableData = (init: boolean) => {
      loading.value = true
      if (init) {
        page.index = 1
      }
      let params = {
        page: page.index,
        pageSize: page.size,
        ...query
      }
      getData(params)
      .then(res => {
        let data = res.data.list
        if (Array.isArray(data)) {
          data.forEach(d => {
            const select = selectData.find(select => select.value === d.choose)
            select ? d.chooseName = select.label : d.chooseName = d.choose
            const date = dateData.find(select => select.value === d.date)
            date ? d.dateName = date.label : d.date
          })
        }
        tableData.value = res.data.list
        page.total = Number(res.data.pager.total)
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
    const handleDel = (data: object[]) => {
      let params = {
        ids: data.map((e:any)=> {
          return e.id
        }).join(',')
      }
      del(params)
      .then(res => {
        ElMessage({
          type: 'success',
          message: '删除成功'
        })
        getTableData(tableData.value.length === 1 ? true : false)
      })
    }
    const handleResetPass = (data: object[]) => {
      let params = {
        ids: data.map((e:any)=> {
          return e.id
        }).join(',')
      }
      del(params)
      .then(res => {
        ElMessage({
          type: 'success',
          message: '密码重置成功'
        })
      })
    }
    // 新增弹窗功能
    const handleAdd = () => {
      layer.title = '新增员工'
      layer.show = true
      delete layer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      layer.title = '编辑员工'
      layer.row = row
      layer.show = true
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
      layer,
      handleSelectionChange,
      handleAdd,
      handleEdit,
      handleDel,
      handleResetPass,
      getTableData,
      columnData
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>