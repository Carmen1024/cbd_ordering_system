<!--  -->
<template>
   <Drawer :drawer="drawer" @confirm="submit">
      <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
        <el-form-item label="模板编号：" prop="name">
          <el-input v-model="form.name" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="模板名称：" prop="number">
          <el-input v-model="form.number" oninput="value=value.replace(/[^\d]/g,'')" placeholder="只能输入正整数"></el-input>
        </el-form-item>
        <el-form-item label="配送地区：" prop="select">
          <el-input
            v-model="textarea"
            :rows="2"
            type="textarea"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="收费规则：" prop="date">
          <CountPrice />
        </el-form-item>
        <el-form-item label="备注：" prop="date">
          <el-input
            v-model="textarea"
            :rows="2"
            type="textarea"
            placeholder="请输入"
          />
        </el-form-item>
        <el-form-item label="启动状态：" prop="date">
          <el-switch
            v-model="value1"
            active-text="有效"
            inactive-text="无效"
          >
          </el-switch>
        </el-form-item>
      </el-form>
   </Drawer>
</template>

<script lang='ts'>
import { defineComponent,ref,Ref } from 'vue'
import Drawer from '@/components/drawer/index.vue';
import type { ElFormItemContext } from 'element-plus/lib/el-form/src/token'
import CountPrice from './../countPrice/index.vue';
export default defineComponent({
  name: 'name',
  components:{
      Drawer,
      CountPrice
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
    const ruleForm: Ref<ElFormItemContext|null> = ref(null)
    let form = ref({
      name: '',
      date:[]
    })
    const rules = {
      name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
      number: [{ required: true, message: '请输入数字', trigger: 'blur' }],
      choose: [{ required: true, message: '请选择', trigger: 'blur' }],
      date: [{ required: true, message: '请选择', trigger: 'blur' }]
    }
    init()
    function init() { // 用于判断新增还是编辑功能
      if (props.drawer.row) {
        let row = JSON.parse(JSON.stringify(props.drawer.row));
        row.date=[];
        form.value = row // 数量量少的直接使用这个转
      } else {

      }
    }
    const submit = ()=>{
      console.log("confirm");
      props.drawer.show = false;
    }
    return{
      submit,
      form,
      rules,
      ruleForm
    }
  },
})
</script>
<style lang='scss'>

</style>