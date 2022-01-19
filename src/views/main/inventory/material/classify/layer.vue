<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <!-- <el-form-item label="分类编号：" prop="id">
        <el-input v-model="form.id" placeholder="请输入编号" disabled></el-input>
      </el-form-item> -->
      <el-form-item label="分类名称：" prop="label">
        <el-input v-model="form.clf_name" placeholder="请输入分类名称"></el-input>
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="ts">
import type { LayerType } from '@/components/layer/index.vue'
import type { Ref } from 'vue'
import type { ElFormItemContext } from 'element-plus/lib/el-form/src/token'
import { defineComponent, ref } from 'vue'
import { selectData, radioData } from './enum'
import { classifyInsert,classifyUpdate } from '@/api/material/classify';
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
    let form = ref({
      clf_name: ''
    })
    const rules = {
      clf_name: [{ required: true, message: '请输入物料分类名称', trigger: 'blur' }],
    }
    init()
    function init() { // 用于判断新增还是编辑功能
      if (props.layer.row) {
        form.value = JSON.parse(JSON.stringify(props.layer.row)) // 数量量少的直接使用这个转
      } else {

      }
    }
    return {
      form,
      rules,
      layerDom,
      ruleForm,
      selectData,
      radioData
    }
  },
  methods: {
    submit() {
      if (this.ruleForm) {
        this.ruleForm.validate((valid) => {
          if (valid) {
            if (this.layer.row) {
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
      classifyInsert(this.form).then(res => {
        this.$message({
          type: 'success',
          message: '新增成功'
        })
        this.$emit('getNodeData', this.form,true)
        this.layerDom && this.layerDom.close()
      })
    },
    // 编辑提交事件
    updateForm() {
      const {_id,clf_name} = this.form;
      const params = {
        "eq": {
          _id
        },
        "set": {
          clf_name
        }
      }
      classifyUpdate(params).then(res => {
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