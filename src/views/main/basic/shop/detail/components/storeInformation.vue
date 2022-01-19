<template>
  <Form>
    <el-form-item label="三级单位" style="width:100%">
      <el-input v-model="form.name" placeholder="请输入" ></el-input>
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in unitData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input v-model="form.name" placeholder="请输入"></el-input>
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in unitData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input v-model="form.name" placeholder="请输入" ></el-input>
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in unitData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="储存方式">
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in unitData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="物流单位">
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in unitData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="订购类型">
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in unitData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="拆单方式">
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in unitData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value" clearable placeholder="Select">
        <el-option
          v-for="item in unitData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="安全库存">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="订购限制">
      <el-input v-model="form.name"></el-input>
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-radio v-model="radio2" label="1" size="large">订货窗口控制</el-radio>
      <el-radio v-model="radio3" label="2" size="large">下单判断库存</el-radio>
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
import {unitData} from './../enum';
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
    })

    const onSubmit = () => {
        console.log('submit!')
    }
    return{
        form,
        onSubmit,
        unitData
    }
}

})
</script>
<style lang="scss" scoped>
  
</style>
