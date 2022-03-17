<!--  -->
<template>
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <el-input v-model="query.like.dict_name" placeholder="请输入字典中文名" @change="getTableData(true)"></el-input>
        <el-input v-model="query.like.dict_key" placeholder="请输入字典英文名" @change="getTableData(true)"></el-input>
        <el-button :icon="Search" class="search-btn" @click="getTableData(true)">{{ $t('message.common.search') }}</el-button>
        <el-button type="primary" :icon="Plus" @click="handleAdd">{{ $t('message.common.add') }}</el-button>
      </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'name',
  setup(){
    
    return{
      
    }
  },
})
</script>
<style lang='scss' scoped>
 
</style>