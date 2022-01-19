<template>
    <div class="layout-container-card">
        <el-button type="primary" :icon="Plus" @click="handleAdd">{{ $t('message.common.add') }}</el-button>
        <div class="cardItems">
          <div class="card-row" v-for="(row,index) in cardData" :key="index">
            <div class="card-row-title">
              <div class="card-row-title-main">门店名称{{index+1}}</div>
              <div class="card-row-title-handle">
                <el-button @click="handleEdit(row)" :icon="Search" circle size="small"></el-button>
                <el-popconfirm :title="$t('message.common.delTip')" @confirm="handleDel([row])">
                  <template #reference>
                    <el-button size="small" type="danger" :icon="Delete" circle></el-button>
                  </template>
                </el-popconfirm>
              </div>
            </div>
            <div class="card-row-main">
              <div><label>门店品牌</label><span>{{index+1}}</span></div>
              <div><label>门店名称</label><span>{{index+1}}</span></div>
              <div><label>门店 ID</label><span>{{index+1}}</span></div>
              <div><label>所属组织</label><span>{{index+1}}</span></div>
              <div><label>门店组别</label><span>{{index+1}}</span></div>
            </div>
          </div>
        </div>
    </div>
    <Layer :layer="layer" v-if="layer.show" />
    <!-- <Layer :layer="layer" @getCardData="getCardData" v-if="layer.show" /> -->
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import Table from '@/components/table/index.vue'
import { Page } from '@/components/table/type'
import { getData, del } from '@/api/table'
import Layer from './layer.vue'
import { ElMessage } from 'element-plus'
import type { LayerInterface } from '@/components/layer/index.vue'
import { selectData, dateData } from './../../enum'
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
      showButton: false,
      width:'50%'
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
    // padding:15px;
    .cardItems{
      display: flex;
      flex-wrap: wrap;
      .card-row{
        width: 350px;
        margin: 10px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(rgb(168, 168, 168), .8);
        &-title{
          display: flex;
          padding:10px;
          line-height: 30px;
          border-bottom: solid 1px #ddd;
          &-main{
            width: 200px;
            font-weight: bold;
            flex: 2;
          }
          &-handle{
            width: 80px;
          }
        }
        &-main{
          padding:10px;
          line-height: 30px;
          div{
            display: flex;
            label{
              width: 90px;
              color:var(--system-primary-color)
            }
          }

        }
      }
    }


  }
</style>