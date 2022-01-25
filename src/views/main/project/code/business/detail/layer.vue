<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <el-form-item label="分类编号：" prop="id">
        <el-input v-model="form.id" placeholder="请输入编号" disabled></el-input>
      </el-form-item>
      <el-form-item label="分类名称：" prop="label">
        <el-input v-model="form.label" placeholder="请输入分类名称"></el-input>
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="ts">
import type { LayerType } from '@/components/layer/index.vue'
import { reactive, Ref } from 'vue'
import type { ElFormItemContext } from 'element-plus/lib/el-form/src/token'
import { defineComponent, ref } from 'vue'
import { add, update } from '@/api/table'
import { selectData } from './../enum'
import Layer from '@/components/layer/index.vue'
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

    let form = reactive({
        "dict_group": "", //字典组
        "dict_group_name": "",  
        "dict_type": -1, //字典表类型 1-列表 2-树
        "dict_parent_id":"", //父组件id

        "dict_val_str": "", ////值字符串
        "c_valid": true,
        "dict_key": "",
    })
    const rules = {
      label: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
    }
    init()
    function init() { // 用于判断新增还是编辑功能
      if (props.layer.row) {
        form = JSON.parse(JSON.stringify(props.layer.row)) // 数量量少的直接使用这个转
      } else {
        
      }
    }
    return {
      form,
      rules,
      layerDom,
      ruleForm,
      selectData,
    }
  },
  methods: {
    submit() {
      if (this.ruleForm) {
        this.ruleForm.validate((valid) => {
          if (valid) {
            let params = this.form
            if (this.layer.row) {
              this.updateForm(params)
            } else {
              this.addForm(params)
            }
          } else {
            return false;
          }
        });
      }
    },
    // 新增提交事件
    addForm(params: object) {
      add(params)
      .then(res => {
        this.$message({
          type: 'success',
          message: '新增成功'
        })
        this.$emit('getNodeData', this.form,true)
        this.layerDom && this.layerDom.close()
      })
    },
    // 编辑提交事件
    updateForm(params: object) {
      update(params)
      .then(res => {
        this.$message({
          type: 'success',
          message: '编辑成功'
        })
        this.$emit('getNodeData', this.form,false)
        this.layerDom && this.layerDom.close()
      })
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>