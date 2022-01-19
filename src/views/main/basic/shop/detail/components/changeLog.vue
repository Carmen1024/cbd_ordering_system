<template>
  <div class="layout-container">
    <div class="layout-container-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" align="center" label="操作类型" />
        <el-table-column prop="name" align="center" label="操作员" />
        <el-table-column prop="address" align="center" label="执行结果" />
        <el-table-column prop="address" align="center" label="操作时间" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { getData } from '@/api/table'
export default defineComponent({
  name: 'crudTable',
  components: {
  },
  setup() {
    let tableData =ref([])
    const loading = ref(true)
    const params={}
    const getTableData = () => {
      loading.value = true
      getData(params)
      .then(res => {
        let data = res.data.list
        tableData.value = data;
      })
      .catch(error => {
        tableData.value = []
      })
      .finally(() => {
        loading.value = false
      })
    }
    return {
      tableData,
      getTableData
    }
  }
})
</script>

<style lang="scss" scoped>
  .layout-container{
    height: auto;
    padding:0;
    margin:0;
  }
</style>