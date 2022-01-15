<template>
  <div class="layout-container">
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-input v-model="query.like.f_name" placeholder="请输入接口名称" @change="getTableData(true)"></el-input>
        <el-input v-model="query.like.f_path" placeholder="请输入接口路径" @change="getTableData(true)"></el-input>
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
      <!-- 接口名称 接口路径 -->
        <el-table-column prop="f_name" label="接口名称" align="center" />
        <el-table-column prop="f_path" label="路径" align="center" />
        <!-- <el-table-column prop="f_path" label="类型" align="center" /> -->
        <el-table-column label="状态" align="center">
          <template #default="scope">
            <el-switch
            v-model="scope.row.c_valid"
            active-text="有效"
            inactive-text="无效"
            @change="handleSwitch(scope.row)"
          >
          </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="c_update_time" label="更新时间" align="center" />
        <el-table-column prop="c_update_user" label="更新人" align="center" />
        <el-table-column :label="$t('message.common.handle')" align="center" fixed="right" width="200">
          <template #default="scope">
            <el-button @click="handleEdit(scope.row)">{{ $t('message.common.update') }}</el-button>
            <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel(scope.row)">
              <template #reference>
                <el-button type="danger">{{ $t('message.common.del') }}</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </Table>
      <Drawer :drawer="drawer" v-if="drawer.show" /> 
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { getData, del } from '@/api/table'
import { filterQuery,filterDelete, filterValid } from '@/api/project/code';
import { ElMessage } from 'element-plus'
import { selectData, dateData } from './enum'
import { Plus, Search, Delete } from '@element-plus/icons'
import Drawer from './drawer.vue';
import type { DrawerInterface } from '@/components/drawer/index.vue';
export default defineComponent({
  name: 'orderRules',
  components: {
    Table,
    Drawer
  },
  setup() {
    // 存储搜索用的数据
    const query = ref({
      like:{
        f_name:"",
        f_path:""
      }
    })
    // 弹窗控制器
    const drawer: DrawerInterface = reactive({
      show:false,
      title:"编辑接口",
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
      // if (init) {
      //   page.index = 1
      // }
      let params = {
        start: <number>page.index-1,
        size: page.size,
        ...query.value
      }
      filterQuery(params)
      .then(res => {
        console.log(res);
        let data = res.data
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
      filterDelete(params)
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
      drawer.title = '新增接口'
      drawer.show = true
      delete drawer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      drawer.title='编辑接口'
      drawer.show = true
      drawer.row = row;
      console.log(drawer.value)
    }
    const handleSwitch = (row: object) => {
      let params = {"eq": {"_id": row._id},"set": {"c_valid": row.c_valid}};
      filterValid(params)
      .then(res => {
        ElMessage({
          type: 'success',
          message: '切换成功'
        })
        // getTableData(tableData.value.length === 1 ? true : false)
      })
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
      handleSwitch,
      handleDel,
      getTableData,
      drawer
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>