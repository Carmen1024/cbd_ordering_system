<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <el-form-item label="接口路径：" prop="path">
        <el-input v-model="form.path"></el-input>
      </el-form-item>
      <el-form-item label="接口条件：" prop="data_str" class="form-item-jv">
        <json-viewer :value="form.data" copyable boxed sort />
        <el-input
          v-model="form.data_str"
          rows="10"
          type="textarea"
          placeholder="请填写正确的json格式，key必须使用双引号"
        />
      </el-form-item>
      <el-form-item label="接口返回值：" class="form-item-response">
        <json-viewer :value="form.response" copyable boxed sort />
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="ts">
import type { LayerType } from '@/components/layer/index.vue'
import type { Ref } from 'vue'
import type { ElFormItemContext } from 'element-plus/lib/el-form/src/token'
import { defineComponent, ref } from 'vue'
import Layer from '@/components/layer/index.vue'
import { requestTest } from '@/api/project/code'
import { ElMessage } from 'element-plus'
export default defineComponent({
  components: {
    Layer
  },
  props: {
    layer: {
      type: Object,
      default: () => {
        return {
          show: false,
          title: '',
          showButton: true
        }
      }
    }
  },
  setup(props, ctx) {
    const ruleForm: Ref<ElFormItemContext|null> = ref(null)
    const layerDom: Ref<LayerType|null> = ref(null)
    let form = ref({
      path:'',
      data: {},
      data_str:'',
      response:{}
    })
    const validateData = (rule: any, value: any, callback: any) => {
      try{
        form.value.data = JSON.parse(form.value.data_str);
        callback()
      }catch(e){
        callback(new Error('请填写正确的json格式'))
      }
    }
    const rules = {
      path: [{ required: true, message: '请输入路径', trigger: 'blur' }],
      data_str: [{ required: true,validator: validateData, trigger: 'change' }],
    }
    // const dfs = (n, path) => {
    //   // console.log(n, path);
    //   Object.keys(n).forEach(k => {
    //     dfs(n[k], path.concat(k));
    //   })
    // }
    const dfs = (n) => {
      // console.log(n, path);
      // console.log(Object.keys(n));
      let middle = {};
      Object.keys(n).map(k => {
        const nk = n[k];
        if(k.indexOf("doc")<0){
          middle[k]= Object.prototype.toString.call(nk) === '[object Object]' ? dfs(nk):nk
        }
      })
      return middle;
    }
    
    init()
    function init() { // 用于判断新增还是编辑功能
      if (props.layer.row) {
        const row = JSON.parse(JSON.stringify(props.layer.row)) // 数量量少的直接使用这个转
        const data = dfs(row.f_should)
        const data_str = ""
        console.log(row);
        
        form.value={
          path:row.f_path,
          data,
          data_str,
          response:{code:"0000",doc:"接口正常返回值会显示在这里，若提示错误请查看netWork"}
        }
      } else {

      }
    }
    const strToJson=()=>{
      try{
        form.value.data = JSON.parse(form.value.data_str);
      }catch(e){
        ElMessage({
          type: 'error',
          message: '请填写正确的json格式'
        })
      }
      console.log(form);
    }
    return {
      form,
      rules,
      layerDom,
      ruleForm,
      strToJson
    }
  },
  methods: {
    submit() {
      if (this.ruleForm) {
        this.ruleForm.validate((valid) => {
          if (valid) {
              this.testService()
          } else {
            return false;
          }
        });
      }
    },
    // 测试接口
    testService() {
      // const params = {
      //   path:this.form.path,
      //   data:JSON.parse(this.form.data_str)
      // }
      // console.log(params);
      requestTest(this.form.path,this.form.data).then(res => {
        this.form.response = res;
        // this.layerDom && this.layerDom.close()
      })
    }
  }
})
</script>

<style lang="scss">
  .form-item-response{
    .el-form-item__content{
      display: flex;
      .jv-container{
        width: 100%;
        height: 150px;
        overflow:hidden;
        .jv-code{
          padding:10px;
        }
        .jv-code.boxed{
          padding:10px;
          height: 130px;
          overflow:auto;
        }
      }
    }
  }
</style>