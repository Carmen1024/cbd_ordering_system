<template>
  <div class="formContainer">
    <el-form ref="validityPeriodForm" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="归属商品">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品状态">
        <el-select v-model="value" clearable placeholder="Select">
          <el-option
            v-for="item in materialStateData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="质量效期">
        <timeItem />
      </el-form-item>
      <el-form-item label="赏味效期">
        <timeItem />
      </el-form-item>
      <el-form-item label="质量效期预警1">
        <timeItem />
      </el-form-item>
      <el-form-item label="赏味效期预警1">
        <timeItem />
      </el-form-item>   
      <el-form-item label="质量效期预警2">
        <timeItem />
      </el-form-item>
      <el-form-item label="赏味效期预警2">
        <timeItem />
      </el-form-item>
      <el-form-item label="商品标签">
        <el-input v-model="input" />
      </el-form-item>
    </el-form>
  </div>
  <div class="handle-container">
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue'
import Form from '@/components/Form/index.vue';
import { materialStateData } from './../../list/enum';
import timeItem from '@/components/time/index.vue';
export default defineComponent({
// do not use same name with ref
components:{
  Form,
  timeItem
},
setup(){
    const form = reactive({
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
    })

    const onSubmit = () => {
        console.log('submit!')
    }
    return{
        form,
        onSubmit,
        materialStateData
    }
}

})
</script>
<style lang="scss" scoped>
  
</style>
