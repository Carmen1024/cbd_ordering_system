<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-button type="primary" :icon="Plus" @click="handleAdd">{{ $t('message.common.add') }}</el-button>
        <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel(chooseData)">
          <template #reference>
            <el-button type="danger" :icon="Delete" :disabled="chooseData.length === 0">{{ $t('message.common.delBat') }}</el-button>
          </template>
        </el-popconfirm>
      </div>
      <div class="layout-container-form-search">
        <el-input v-model="query.input" :placeholder="$t('message.common.searchTip')" @change="getTableData(true)"></el-input>
        <el-button type="primary" :icon="Search" class="search-btn" @click="getTableData(true)">{{ $t('message.common.search') }}</el-button>
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
        <el-table-column prop="name" label="物料编码" align="center" />
        <el-table-column prop="number" label="物料名称" align="center" />
        <el-table-column prop="chooseName" label="物料分类" align="center" />
        <el-table-column prop="radioName" label="订购单位" align="center" />
        <el-table-column prop="radioName" label="包装规格" align="center" />
        <el-table-column prop="radioName" label="进项税率" align="center" />
        <el-table-column prop="radioName" label="盘点周期" align="center" />
        <el-table-column prop="chooseName" label="状态" align="center" >
          <el-switch v-model="tableData.chooseName" inline-prompt active-text="是" inactive-text="否"/>
        </el-table-column>
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
    </div>
    <Drawer :drawer="drawer" v-if="drawer.show" /> 
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { getData, del } from '@/api/table'
import { ElMessage } from 'element-plus'
import { selectData, radioData } from './enum'
import { Plus, Search, Delete } from '@element-plus/icons'
import Drawer from './drawer.vue';
import type { DrawerInterface } from '@/components/drawer/index.vue';
export default defineComponent({
  name: 'crudTable',
  components: {
    Table,
    Drawer
  },
  setup() {
    // 存储搜索用的数据
    const query = reactive({
      input: ''
    })
    // 弹窗控制器
    const drawer: DrawerInterface = reactive({
      show:false,
      title:"编辑规则",
      showButton:true,
      width:'50%'
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
            const radio = radioData.find(select => select.value === d.radio)
            radio ? d.radioName = radio.label : d.radio
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
    // 新增弹窗功能
    const handleAdd = () => {
      drawer.title = '新增数据'
      drawer.show = true
      delete drawer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      drawer.title='编辑数据-抽屉'
      drawer.show = true
      drawer.row = row;
      console.log(drawer.value)
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
      drawer
    }
  },
  methods:{
    toDetail(row:object){
      // 这三种形式是等价的
      // router.push('/users/posva#bio')
      // router.push({ path: '/users/posva', hash: '#bio' })
      // router.push({ name: 'users', params: { username: 'posva' }, hash: '#bio' })
      // // 只改变 hash
      // router.push({ hash: '#bio' })
      // // 只改变 query
      // router.push({ query: { page: '2' } })
      // // 只改变 param
      // router.push({ params: { username: 'jolyne' } })
      this.$router.push({
        path: '/inventory/material/detail',
        query: { username: 'posva' }
      })
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>