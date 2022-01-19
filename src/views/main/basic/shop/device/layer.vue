<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <el-form-item label="设备Key：" prop="name">
        <el-input v-model="form.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="所属门店：" prop="number">
        <el-input v-model="form.number" oninput="value=value.replace(/[^\d]/g,'')" placeholder="只能输入正整数"></el-input>
      </el-form-item>
			<el-form-item label="LOT平台：" prop="select">
			  <el-input v-model="form.number" oninput="value=value.replace(/[^\d]/g,'')" placeholder="只能输入正整数"></el-input>
			</el-form-item>
      <el-form-item label="SN编码：" prop="date">
        <el-input v-model="form.name" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="设备型号：" prop="date">
			  <el-input v-model="form.name" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="打印任务：" prop="date">
			  <el-input
          v-model="textarea"
          :rows="2"
          type="textarea"
          placeholder="请输入"
        />
      </el-form-item>
      <el-form-item label="激活状态：" prop="date">
        <el-switch
          v-model="value1"
          active-text="开启"
          inactive-text="关闭"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="联机状态：" prop="date">
        <el-switch
          v-model="value1"
          active-text="在线"
          inactive-text="断线"
        >
        </el-switch>
      </el-form-item>
      <el-form-item label="可用状态：" prop="date">
        <el-switch
          v-model="value1"
          active-text="可用"
          inactive-text="不可用"
        >
        </el-switch>
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
import { selectData, dateData } from './enum'
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
      if (props.layer.row) {
        let row = JSON.parse(JSON.stringify(props.layer.row));
        row.date=[];
        form.value = row // 数量量少的直接使用这个转
      } else {

      }
    }
    return {
      form,
      rules,
      layerDom,
      ruleForm,
      selectData,
      dateData
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
        this.$emit('getTableData', true)
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
        this.$emit('getTableData', false)
        this.layerDom && this.layerDom.close()
      })
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>