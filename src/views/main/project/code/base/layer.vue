<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <el-form-item label="接口路径：" prop="path">
        <el-input v-model="form.path"></el-input>
      </el-form-item>
      <el-form-item label="接口条件：" prop="data" class="form-item-jv">
        <json-viewer :value="form.data" copyable boxed sort />
        <el-input
          v-model="form.data_str"
          rows="10"
          type="textarea"
          placeholder="请填写正确的json格式，key必须使用双引号"
        />
      </el-form-item>
      <el-form-item label="接口返回值：">
        <el-input
          v-model="form.response"
          rows="2"
          type="textarea"
          placeholder="接口正常返回值会显示在这里，若提示错误请查看netWork"
          
        />
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="ts">
import type { LayerType } from '@/components/layer/index.vue'
import type { Ref } from 'vue'
import type { ElFormItemContext } from 'element-plus/lib/el-form/src/token'
import { defineComponent, ref } from 'vue'
import { add, update } from '@/api/table'
import Layer from '@/components/layer/index.vue'
import { requestTest } from '@/api/project/code';
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
      response:""
    })
    const rules = {
      data: [{ required: true, message: '请输入条件', trigger: 'blur' }],
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
          response:""
        }
      } else {

      }
    }
    const strToJson=()=>{

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
      requestTest(this.form.path,JSON.parse(this.form.data_str)).then(res => {
        this.form.response = JSON.stringify(res);
        this.$message({
          type: 'success',
          message: '接口请求已发送'
        })
        // this.layerDom && this.layerDom.close()
      })
    }
  }
})
</script>

<style lang="scss">

</style>