<template>
  <form-main
    ref = "formMainRef"
    :form = "form" 
    :rules = "rules"
    :itemArr="itemArrs"
    @addForm="addForm"
    @updateForm="updateForm"
  />
</template>

<script lang="ts" setup>
  import { defineComponent,reactive,ref,computed,toRefs } from 'vue'
  import { useStore } from 'vuex';
  import FormMain from '@/components/Form/main.vue'
  import { rules,itemArr,updateFormat } from './enum'
  import { materialInsert,materialFetch,materialUpdate } from '@/api/material/material'
  import { getData } from '@/utils/transform/httpConfig';
  import { ElMessage } from 'element-plus'

  const props = defineProps({
    form:{
      type: Object,
      default: () => {
        return {}
      }
    }
  })
  const store = useStore()

  const itemArrs = computed(()=>{
    const d = itemArr.find(item => item.prop == 'm_classify_id_arr')
    d.options = store.state.enum.classifyOptions
    return itemArr
  })
  const emit = defineEmits(["getTableData"])
  // const orderRules = ref({})
  // init()
  // function init() { // 用于判断新增还是编辑功能
  //   props.form.row && getMaterial()
  // }
  // 新增提交事件
   function addForm(params: object) {
     const d = setData(params)
      materialInsert(d).then(res => {
        ElMessage({
          type: 'success',
          message: '新增成功'
        })
        emit("getTableData")
      })
    }
    // 编辑提交事件
   function updateForm(params: object){
      const d = setData(params)
      materialUpdate({_id:params._id,...d}).then(res => {
        ElMessage({
          type: 'success',
          message: '编辑成功'
        })
        emit("getTableData")
      })
    }
    function setData(params:object){
      const {m_p_money,m_name,m_code,m_package,clf_b_id,m_status} = params
      const {order_unit,m_sell_type,order_unit_count,m_order_window_ctrl,stock_unit_count,
            m_order_step_type,bom_unit_count,m_split_type,m_order_lower,m_order_upper,
            m_is_check_stock,bom_unit,m_storage_type,stock_unit,m_is_cac_freight} = params
      const {m_s_desc,m_s_brand,m_s_origin_place,m_s_main_picture,m_s_attachment_file} = params
      const m_classify_id = params.m_classify_id_arr?.join("/")
      const data = {
        m_p_money,m_name,m_code,m_package,clf_b_id,m_status,m_classify_id,
        m_sell_info:{order_unit,m_sell_type,order_unit_count,m_order_window_ctrl,stock_unit_count,
            m_order_step_type,bom_unit_count,m_split_type,m_order_lower,m_order_upper,
            m_is_check_stock,bom_unit,m_storage_type,stock_unit,m_is_cac_freight},
        m_supplement_info:{m_s_desc,m_s_brand,m_s_origin_place,m_s_main_picture,m_s_attachment_file}
      }
      return data
    }
    const formMainRef = ref("formMainRef")
    function submit(){
      formMainRef.value.submit()
    }
    defineExpose({
      submit
    })
</script>
<style lang="scss" scoped>
  
</style>
