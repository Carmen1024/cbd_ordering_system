<!--  -->
<template>
   <Drawer :drawer="drawer" @confirm="submit">
      <Form>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="150px">
          <el-form-item label="接口名称：" prop="f_name">
            <el-input v-model="form.f_name" placeholder="请输入接口名称"></el-input>
          </el-form-item>
          <el-form-item label="接口路径：" prop="f_path">
            <el-input v-model="form.f_path" placeholder="只能输入字母，下划线，数字，斜杠"></el-input>
          </el-form-item>
          <el-form-item label="是否验证必填项：" prop="f_must_enable">
            <el-switch v-model="form.f_must_enable" active-text="验证" inactive-text="不验证" />
          </el-form-item>
          <el-form-item label="必填项：" prop="f_must">
            <el-input
              v-model="strObj.f_must_str"
              @blur="strToJson('f_must')"
              :rows="3"
              type="textarea"
              placeholder="请填写正确的json格式，key必须使用双引号"
            />
          </el-form-item>          
          <el-form-item label="是否过滤可选项：" prop="f_should_enable">
            <el-switch v-model="form.f_should_enable" active-text="过滤" inactive-text="不过滤" />
          </el-form-item>
          <el-form-item label="可选项：" prop="f_should">
            <el-input
              v-model="strObj.f_should_str"
              @blur="strToJson('f_should')"
              :autosize="{ minRows: 3, maxRows: 10 }"
              type="textarea"
              placeholder="请填写正确的json格式，key必须使用双引号"
            />
          </el-form-item>
          <el-form-item label="是否填入默认值：" prop="f_tacit_enable">
            <el-switch v-model="form.f_tacit_enable" active-text="填入" inactive-text="不填入" />
          </el-form-item>
          <el-form-item label="默认值：" prop="f_tacit">
            <el-input
              v-model="strObj.f_tacit_str"
              @blur="strToJson('f_tacit')"
              :rows="3"
              type="textarea"
              placeholder="请填写正确的json格式，key必须使用双引号"
            />
          </el-form-item>
          <el-form-item label="是否填入扩展值：" prop="f_ext_enable">
            <el-switch v-model="form.f_ext_enable" active-text="过滤" inactive-text="不过滤" />
          </el-form-item>          
          <el-form-item label="扩展值：" prop="f_ext">
            <el-input
              v-model="strObj.f_ext_str"
              @blur="strToJson('f_ext')"
              :rows="3"
              type="textarea"
              placeholder="请填写正确的json格式，key必须使用双引号"
            />
          </el-form-item>
          <el-form-item label="是否过滤返回值：" prop="f_res_enable">
            <el-switch v-model="form.f_res_enable" active-text="过滤" inactive-text="不过滤" />
          </el-form-item>
          <el-form-item label="返回值：" prop="f_res">
            <el-input
              v-model="strObj.f_res_str"
              @blur="strToJson('f_res')"
              :rows="3"
              type="textarea"
              placeholder="请填写正确的json格式，key必须使用双引号"
            />
          </el-form-item>
          <el-form-item label="是否发送异步消息：" prop="f_mq_enable">
            <el-switch v-model="form.f_mq_enable" active-text="过滤" inactive-text="不过滤" />
          </el-form-item>
          <el-form-item label="异步消息：" prop="f_mq">
            <el-input
              v-model="strObj.f_mq_str"
              @blur="strToJson('f_mq')"
              :rows="3"
              type="textarea"
              placeholder="请填写正确的json格式，key必须使用双引号"
            />
          </el-form-item>
        </el-form>
      </Form>
   </Drawer>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive,computed, onBeforeUnmount } from 'vue'
import type { Ref } from 'vue'
import type { ElFormItemContext } from 'element-plus/lib/el-form/src/token'
import Drawer from '@/components/drawer/index.vue';
import {dateData} from './enum';
import Form from '@/components/Form/index.vue';
import { filterInsert,filterUpdate } from '@/api/project/code';
import { baseInterface } from './api';
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
    const ruleForm: Ref<ElFormItemContext|null> = ref(null)
    const rules = {
      f_name: [{ required: true, message: '请输入接口名称', trigger: 'blur' }],
      f_path: [{ required: true, message: '请输入接口路径', trigger: 'blur' }]
    }
    let form = ref({
      "f_name": "测试新增接口",
      "f_path": "/test",
      "f_must_enable": true,
      "f_must": {"eq":{"_id":""}},
      "f_should_enable": true,
      "f_should": {"eq":{"_id":""}},
      "f_tacit_enable": false,
      "f_tacit": {},
      "f_ext_enable": false,
      "f_ext": {},
      "f_res_enable": false,
      "f_res": {},
      "f_mq_enable": false,
      "f_mq": {},
    })
    let strObj=ref({
      "f_must_str":"",
      "f_should_str":"",
      "f_ext_str":"",
      "f_tacit_str":"",
      "f_mq_str":"",
      "f_res_str":"",
    })
    const objArray = ["f_must","f_should","f_ext","f_tacit","f_mq","f_res"];
    init()
    function init() { // 用于判断新增还是编辑功能
      if (props.drawer.row) {
        let row = JSON.parse(JSON.stringify(props.drawer.row));
        row.date=[];
        form.value = row // 数量量少的直接使用这个转
      } else {

      }
      jsonToStr();
    }
    const strToJson=(val:string)=>{
      // console.log(form,strObj[val+'_str']);
      form.value[val] = JSON.parse(strObj.value[val+'_str']);
      // console.log(form);
    }
    function jsonToStr(){
      objArray.map(item=>{
        strObj.value[item+"_str"] = JSON.stringify(form.value[item])
      })
    }
    return{
      form,
      dateData,
      strToJson,
      strObj,
      objArray,
      rules,
      ruleForm,
    }
  },
  methods: {
    submit() {
      if (this.ruleForm) {
        this.ruleForm.validate((valid) => {
          if (valid) {
            if (this.drawer.row) {
              this.updateForm()
            } else {
              this.addForm()
            }
          } else {
            return false;
          }
        });
      }
    },
    // 新增提交事件
    addForm() {
      const params = this.form;
      filterInsert(params)
      .then(res => {
        this.$message({
          type: 'success',
          message: '新增成功'
        })
        this.$emit('getTableData', true)
        this.drawer.show = false;
      })
    },
    // 编辑提交事件
    updateForm() {
      const params = {
        "eq": {
          "_id": this.form._id
        },
        "set": {
          ...this.form
        }
      }
      filterUpdate(params)
      .then(res => {
        this.$message({
          type: 'success',
          message: '编辑成功'
        })
        this.$emit('getTableData', false)
        this.drawer.show = false;
      })
    }
  }
})
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang='scss' scoped>
.formContainer {
  .el-form {
    .el-form-item{
      width: 90%;
    }
  }
}
</style>