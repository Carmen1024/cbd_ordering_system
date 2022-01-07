<template>
  <Form>
    <el-form-item label="物料编号">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="物料名称">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai"></el-option>
        <el-option label="Zone two" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="物料类型">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="原物料分类">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="包装规则">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="物料状态">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="销售价">
      <el-input v-model="form.name"></el-input>
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
        onSubmit
    }
}

})
</script>
<style lang="scss" scoped>
  
</style>
