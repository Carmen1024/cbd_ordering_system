<template>
  <Form>
    <el-form-item label="物料编号">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="物料名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="物料类型">
      <el-select v-model="form.name" clearable placeholder="Select">
        <el-option
          v-for="item in materialTypeData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="原物料分类">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="包装规则">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="物料状态">
      <el-select v-model="form.name" clearable placeholder="Select">
        <el-option
          v-for="item in materialStatusData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="销售价">
      <el-input v-model="form.name"></el-input>
      <el-radio v-model="radio1" label="1" size="small">开放价格</el-radio>
    </el-form-item>
    <el-form-item label="成本价">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="税率">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="税收分类编码">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item> -->
  </Form>
</template>

<script lang="ts">
import { defineComponent,reactive } from 'vue'
import Form from '@/components/Form/index.vue';
import { unitData, materialTypeData, materialStatusData } from './../enum'
export default defineComponent({
// do not use same name with ref
components:{
  Form
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
        radio:1
    })

    const onSubmit = () => {
        console.log('submit!')
    }
    return{
        form,
        onSubmit,
        materialTypeData,
        materialStatusData
    }
}

})
</script>
<style lang="scss" scoped>
  
</style>
