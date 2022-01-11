<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <el-form-item label="仓库编号：" prop="name">
        <el-input v-model="form.name" placeholder="请输入名称" disabled></el-input>
      </el-form-item>
      <el-form-item label="仓库名称：" prop="number">
        <el-input v-model="form.number" oninput="value=value.replace(/[^\d]/g,'')" placeholder="只能输入正整数"></el-input>
      </el-form-item>
			<el-form-item label="仓库信息：" prop="select">
			  <el-input
          v-model="textarea"
          :rows="2"
          type="textarea"
          placeholder="请输入"
        />
			</el-form-item>
      <el-form-item label="配送区域：" prop="date">
        <el-input
          v-model="textarea"
          :rows="2"
          type="textarea"
          placeholder="请输入"
        />
      </el-form-item>
      <el-form-item label="订货时间：" prop="date">
        <el-time-select
          v-model="startTime"
          class="mr-4"
          placeholder="开始时间"
          start="00:00"
          step="00:15"
          end="23:45"
        >
        </el-time-select>
        <el-time-select
          v-model="endTime"
          :min-time="startTime"
          placeholder="结束时间"
          start="00:15"
          step="00:15"
          end="24:00"
        >
        </el-time-select>
      </el-form-item>
      <el-form-item label="停止订货：" prop="date">
        <el-switch
          v-model="value1"
          active-text="关闭"
          inactive-text="开启"
        >
        </el-switch>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        >
        </el-date-picker>
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
import Form from '@/components/Form/index.vue';
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