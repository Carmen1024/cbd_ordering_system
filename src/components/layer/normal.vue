<template>
  <Layer :layer="layer" @confirm="submit" ref="layerDom">
    <el-form :model="model" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <el-form-item 
        v-for="(item,index) in itemArr"
        :key="index"
        :label="item.label" 
        :prop="item.prop"
      >
        <!-- 输入框 -->
        <el-input 
          v-if="item.type=='input'"
          v-model="model[item.prop]"
          :placeholder="item.placeholder"
          >
        </el-input>
        <!-- 文本框 -->
        <el-input
          v-if="item.type=='textarea'"
          v-model="model[item.prop]"
          :rows="2"
          type="textarea"
          :placeholder="item.placeholder"
        />
        <!-- 开关 -->
        <el-switch
          v-if="item.type=='switch'"
          v-model="model[item.prop]"
          :active-text="item.activeText || '开启'"
          :inactive-text="item.inactiveText || '关闭'"
        >
        </el-switch>
        <el-select 
          v-if="item.type == 'select'" 
          v-model="model[item.prop]"
          :placeholder="item.placeholder || '请选择'">
          <el-option
              v-for="option in item.options"
              :key="option.value"
              :label="option.label"
              :value="option.value"
          />
      </el-select>
      </el-form-item>
    </el-form>
  </Layer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { LayerType } from '@/components/layer/index.vue'
import type { Ref } from 'vue'
import type { ElFormItemContext } from 'element-plus/lib/el-form/src/token'
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
    },
    rules:{
      type: Array,
      default: () => {
        return []
      }
    },
    itemArr:{
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup(props, ctx) {
    const ruleForm: Ref<ElFormItemContext|null> = ref(null)
    const layerDom: Ref<LayerType|null> = ref(null)
    
    const model=ref({})

    init()
    function init() { // 用于判断新增还是编辑功能
      if (props.layer.row) {
        let row = JSON.parse(JSON.stringify(props.layer.row));
        row.date=[];
        model.value = row // 数量量少的直接使用这个转
      } else {

      }
    }

    function submit() {
      console.log(model.value)
      if (ruleForm.value) {
        ruleForm.value.validate((valid) => {
          if(valid) {
            let params = model.value
            if (props.layer.row) {
              ctx.emit("updateForm",params)
            } else {
              ctx.emit("addForm",params)
            }
          } else {
            return false;
          }
        });
      }
    }

    return {
      model,
      layerDom,
      ruleForm,
      submit
    }
  }
})
</script>

<style lang="scss" scoped>
  
</style>