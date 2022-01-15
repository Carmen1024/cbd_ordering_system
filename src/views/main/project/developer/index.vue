<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <Table
        ref="table"
        v-model:page="page"
        :showIndex="true"
        :data="tableData"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
        <!-- <el-table-column prop="name" label="工号" align="center" /> -->
        <el-table-column prop="name" label="姓名" align="center" />
        <el-table-column prop="developerName" label="岗位" align="center" />
        <el-table-column prop="departmentName" label="部门" align="center" />
      </Table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import type { LayerInterface } from '@/components/layer/index.vue'
import { developerData, departmentData, developers } from './enum'
import { Plus, Search, Delete } from '@element-plus/icons'
export default defineComponent({
  name: 'crudTable',
  components: {
    Table
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
      showButton: true
    })
    // 分页参数, 供table使用
    const page: Page = reactive({
      index: 1,
      size: 20,
      total: 0
    })
    const loading = ref(true)
    const tableData = ref([])
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getTableData = () => {
        let data = developers;
        if (Array.isArray(data)) {
          data.forEach(d => {
            const select = developerData.find(select => select.value === d.developer)
            select ? d.developerName = select.label : d.developerName = d.department
            const date = departmentData.find(select => select.value === d.department)
            date ? d.departmentName = date.label : d.departmentName = d.developer
          })
        }
        tableData.value = data
    }
    getTableData()
    return {
      Plus,
      Search,
      Delete,
      query,
      tableData,
      loading,
      page,
      layer,
      getTableData
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>