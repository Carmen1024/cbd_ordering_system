<!--  -->
<template>
   <Drawer :drawer="drawer" @confirm="submit">
     <Form>
       <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px">
        <el-form-item label="档案编号：" prop="name" style="width:33%;">
          <el-input v-model="form.name" placeholder="请填写名称" disabled></el-input>
        </el-form-item>
        <el-form-item label="档案名称：" prop="number" style="width:33%;">
          <el-input v-model="form.number" oninput="value=value.replace(/[^\d]/g,'')" placeholder="只能输入正整数"></el-input>
        </el-form-item>
        <el-form-item label="状态：" prop="select" style="width:33%;">
          <el-switch
            v-model="value1"
            active-text="有效"
            inactive-text="无效"
          >
          </el-switch>
        </el-form-item>
        <el-form-item label="生效地区：" prop="radio" style="width:100%;">
          <el-checkbox-group v-model="form.radio">
            <el-checkbox v-for="item in dateData" :key="item.value" :label="item.label" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="商品明细：" style="width:100%;">
          
        </el-form-item>
      </el-form>
     </Form>
   </Drawer>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
import Drawer from '@/components/drawer/index.vue';
import {dateData} from './enum';
import Form from '@/components/Form/index.vue';
export default defineComponent({
  name: 'name',
  components:{
      Drawer,
      Form
  },
  props:{
      drawer:{
        type: Object,
        default: () => {
            return {
                show: false,
                title:'',
                showButton:true
            }
        }
      }
  },
  setup(props){

    let form = ref({
      name: '',
      radio:[]
    })
    const submit = ()=>{
      console.log("confirm");
      props.drawer.show = false;
    }
    return{
      submit,
      form,
      dateData
    }
  },
})
</script>
<style lang='scss' scoped>
 
</style>