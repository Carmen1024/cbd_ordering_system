<template>
  <Form>
    <el-form-item label="三级单位" style="width:100%">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="储存方式">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai"></el-option>
        <el-option label="Zone two" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="物流单位">
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
