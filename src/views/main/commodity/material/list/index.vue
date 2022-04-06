<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-input v-model="query.like.clf_name" placeholder="请填写商品分类" @change="getTableData(true)"></el-input>
        <el-input v-model="query.like.m_code" placeholder="请填写商品编码" @change="getTableData(true)"></el-input>
        <el-input v-model="query.like.m_name" placeholder="请填写商品名称" @change="getTableData(true)"></el-input>
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
        :data="tableData"
        @getTableData="getTableData"
        @selection-change="handleSelectionChange"
      >
        <el-table-column prop="m_code" label="商品编码" align="center" />
        <el-table-column prop="m_name" label="商品名称" align="center" />
        <el-table-column prop="clf_names" label="商品分类" align="center" />
        <el-table-column prop="m_order_step_type_desc" label="订货规则" align="center" />
        <el-table-column prop="m_type_desc" label="商品类型" align="center" />
        <el-table-column prop="m_split_type_desc" label="拆单方式" align="center" />
        <el-table-column prop="m_sell_type_desc" label="销售类型" align="center" />
        <el-table-column prop="m_status_desc" label="商品状态" align="center" />
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
    <Detail :drawer="drawer" v-if="drawer.show" /> 
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { ElMessage } from 'element-plus'
import { options,sData } from './enum'
import { Plus, Search, Delete } from '@element-plus/icons'
import Detail from './../detail/index.vue';
import type { DrawerInterface } from '@/components/drawer/index.vue';
import { materialQuery } from '@/api/material/material';
import { useStore } from "vuex";
import { getData } from '@/utils/transform/httpConfig'
export default defineComponent({
  name: 'crudTable',
  components: {
    Table,
    Detail
  },
  setup() {
    const store = useStore();
    store.commit("enum/setOption", "m_status");
    // 存储搜索用的数据
    const query = reactive({})
    // 弹窗控制器
    const drawer: DrawerInterface = reactive({
      show:false,
      title:"编辑规则",
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
      const nQuery = getData(sData,query)
      let params = {
        start: <number>page.index-1,
        size: page.size,
        ...nQuery
      }
      materialQuery(params)
      .then(res => {
        let data = res.data
        if (Array.isArray(data)) {
          data.forEach(d => {
            const m_order_step_type = options.m_order_step_type_data.find(item => item.value === d.m_order_step_type)
            d.m_order_step_type_desc = m_order_step_type ?  m_order_step_type.label : d.m_order_step_type

            const m_type = options.m_type_data.find(item => item.value === d.m_type)
            d.m_type_desc = m_type ?  m_type.label : d.m_type

            const m_split_type = options.m_split_type_data.find(item => item.value === d.m_split_type)
            d.m_split_type_desc = m_split_type ?  m_split_type.label : d.m_split_type

            const m_sell_type = options.m_sell_type_data.find(item => item.value === d.m_sell_type)
            d.m_sell_type_desc = m_sell_type ?  m_sell_type.label : d.m_sell_type

            const m_status = options.m_status_data.find(item => item.value === d.m_status)
            d.m_status_desc = m_status ?  m_status.label : d.m_status
          })
        }
        console.log(data);
        tableData.value = data
        page.total = Number(res.total)
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
      drawer.title = '新增商品'
      drawer.show = true
      delete drawer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      drawer.title='编辑商品'
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
  }
})
</script>

<style lang="scss" scoped>
  
</style>