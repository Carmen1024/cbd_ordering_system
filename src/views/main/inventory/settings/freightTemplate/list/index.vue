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
    </div>
    <div class="layout-container-card">
      <div class="card-row" v-for="(row,index) in cardData" :key="index">
        <div class="card-row-main">
          <div class="card-row-main-title">{{index+1}}.运费规则{{index+1}}</div>
          <div>这是一段很长的描述信息，这是一段很长的描述信息，这是一段很长的描述信息。</div>
          <div>收费规则：{{index+1}}</div>
          <div>发货地区：{{index+1}}</div>
          <div>更新时间：{{index+1}}</div>
        </div>
        <div class="card-row-handle">
          <el-button @click="handleEdit(row)">{{ $t('message.common.update') }}</el-button>
            <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel([row])">
              <template #reference>
                <el-button type="danger">{{ $t('message.common.del') }}</el-button>
              </template>
            </el-popconfirm>
        </div>
      </div>
    </div>
    <Layer :layer="layer" @getCardData="getCardData" v-if="layer.show" />
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
      showButton: true
    })
    // 分页参数, 供table使用
    const page: Page = reactive({
      index: 1,
      size: 10,
      total: 0
    })
    const loading = ref(true)
    const cardData = ref([])
    const chooseData = ref([])
    const handleSelectionChange = (val: []) => {
      chooseData.value = val
    }
    // 获取表格数据
    // params <init> Boolean ，默认为false，用于判断是否需要初始化分页
    const getCardData = (init: boolean) => {
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
        cardData.value = res.data.list
        page.total = Number(res.data.pager.total)
      })
      .catch(error => {
        cardData.value = []
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
        getCardData(cardData.value.length === 1 ? true : false)
      })
    }
    // 新增弹窗功能
    const handleAdd = () => {
      layer.title = '新增数据'
      layer.show = true
      delete layer.row
    }
    // 编辑弹窗功能
    const handleEdit = (row: object) => {
      layer.title = '编辑数据'
      layer.row = row
      layer.show = true
    }
    getCardData(true)
    return {
      Plus,
      Search,
      Delete,
      query,
      cardData,
      chooseData,
      loading,
      page,
      layer,
      handleSelectionChange,
      handleAdd,
      handleEdit,
      handleDel,
      getCardData
    }
  }
})
</script>

<style lang="scss" scoped>
  .layout-container-card{
    padding:15px;
    .card-row{
      display: flex;
      width: 100%;
      max-width: 1000px;
      padding:10px 0;
      border-bottom: solid 1px #ddd;
      &-main{
        width: 800px;
        line-height: 30px;
        &-title{
          font-weight: bold;
        }
      }
      &-handle{
        width: 200px;
      }
    }

  }
</style>