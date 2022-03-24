<!--  -->
<template>
    <div class="layout-container-form flex space-between">
      <div class="layout-container-form-handle">
        <div v-for="(item,index) in condition" :key="index" class="condition">
            <el-select v-if="item.type == 'select'" 
                v-model="query[item.prop]"
                @change="getTableData"
                :placeholder="item.placeholder || '请选择'">
                <el-option :label="item.placeholder || '全部'" :value="null" />
                <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                />
            </el-select>
            <el-input v-if="item.type == 'input'"
                v-model="query[item.prop]"
                :placeholder="item.placeholder || '请填写'" 
                @change="getTableData">
            </el-input>
             <el-date-picker v-if="item.type == 'dataTime'"
                v-model="query[item.prop]"
                type="datetime"
                :placeholder="item.placeholder || '请选择时间'"
              />
        </div>
        <div v-for="item in handles" :key="item" class="handle">
            <el-button v-if="item=='search'" :icon="Search" class="search-btn" @click="getTableData">
                {{ $t('message.common.search') }}
            </el-button>
            <el-button v-if="item=='add'" type="primary" :icon="Plus" @click="handleAdd">
                {{ $t('message.common.add') }}
            </el-button>
        </div>
      </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { Plus, Search, Delete } from '@element-plus/icons'

export default defineComponent({
  name: 'name',
  props:{
      handles:{
          type:Array,
          default(){
            return ['search','add']
          }
      },
      condition:{
        type:Array,
          default(){
            return []
          }  
      },
      query:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  setup(props,cxt){
    
    const getTableData=()=>{
        cxt.emit("getTableData",true)
    }
    const handleAdd=()=>{
        cxt.emit("handleAdd")
    }

    return{
      Plus,
      Search,
      Delete,
      getTableData,
      handleAdd
    }
  },
})
</script>
<style lang='scss' scoped>
  .layout-container-form-handle{
    // max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    .condition{
      margin: 0 10px 10px 0;
      min-width: 200px;
    }
    .handle{
      margin: 0 10px 10px 0;
      // margin-right: 10px;
    }

  }
</style>