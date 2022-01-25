<template>
  <Form :formRef="basicInfoRef" :form="form" :rules="rules">
    <el-form-item label="物料名称" prop="m_name">
      <el-input v-model="form.m_name"></el-input>
    </el-form-item>
    <el-form-item label="物料类型" prop="m_type">
      <el-select v-model="form.m_type" clearable placeholder="请选择物料类型">
        <el-option
          v-for="item in m_type_data"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="物料分类" prop="clf_ids">
      <el-input v-model="form.clf_ids"></el-input>
    </el-form-item>
    <el-form-item label="包装规则" prop="m_package">
      <el-input v-model="form.m_package"></el-input>
    </el-form-item>
    <el-form-item label="物料状态" prop="m_status">
      <el-select v-model="form.m_status" clearable placeholder="请选择物料状态">
        <el-option
          v-for="item in m_status_data"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="销售价" prop="m_p_money_sell">
      <el-input v-model="form.m_p_money_sell"></el-input>
      <el-checkbox v-model="form.m_open_money" label="开放价格"></el-checkbox>
    </el-form-item>
    <el-form-item label="成本价" prop="m_p_money_cost">
      <el-input v-model="form.m_p_money_cost"></el-input>
    </el-form-item>
    <el-form-item label="税率" prop="m_tax_ratio">
      <el-input v-model="form.m_tax_ratio"></el-input>
    </el-form-item>
    <el-form-item label="税收分类编码" prop="m_tax_code">
      <el-input v-model="form.m_tax_code"></el-input>
    </el-form-item>
    <el-form-item label="三级单位" style="width:15%" prop="m_u_count_purchase">
    <el-input v-model="form.m_u_count_purchase" placeholder="请输入订购单位" ></el-input>
    </el-form-item>
    <el-form-item label="" style="width:15%" label-width="0">
      <el-select v-model="form.m_u_unit_purchase" clearable placeholder="请选择订购单位">
        <el-option
          v-for="item in m_u_unit_purchase_data"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="" style="width:15%" label-width="0">
      <el-input v-model="form.m_u_count_stock" placeholder="请输入库存单位"></el-input>
    </el-form-item>
    <el-form-item label="" style="width:15%" label-width="0">
      <el-select v-model="form.m_u_unit_stock" clearable placeholder="请选择库存单位">
        <el-option
          v-for="item in m_u_unit_stock_data"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="" style="width:15%" label-width="0">
      <el-input v-model="form.m_u_count_bom" placeholder="请输入BOM单位" ></el-input>

    </el-form-item>
    <el-form-item label="" style="width:15%" label-width="0">
      <el-select v-model="form.m_u_unit_bom" clearable placeholder="请选择BOM单位">
        <el-option
          v-for="item in m_u_unit_bom_data"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    



    <el-form-item label="储存方式" prop="m_storage_type">
      <el-select v-model="form.m_storage_type" clearable placeholder="请选择储存方式">
        <el-option
          v-for="item in m_storage_type_data"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="物流单位" prop="m_u_count_trans">
      <el-input v-model="form.m_u_count_trans" placeholder="请输入物流单位" ></el-input>
      <el-select v-model="form.m_u_unit_trans" clearable placeholder="请选择物流单位">
        <el-option
          v-for="item in m_u_unit_trans_data"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="订购类型" prop="m_order_type">
      <el-select v-model="form.m_order_type" clearable placeholder="请选择订购类型">
        <el-option
          v-for="item in m_order_type_data"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="拆单方式" prop="m_split_type">
      <el-select v-model="form.m_split_type" clearable placeholder="请选择拆单方式">
        <el-option
          v-for="item in unitData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="form.m_split_sub_type" clearable placeholder="请选择拆单子类型">
        <el-option
          v-for="item in m_split_sub_type_data"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="安全库存">
      <el-input v-model="form.m_save_store"></el-input>
    </el-form-item>
    <el-form-item label="订购限制">
      <el-input v-model="form.m_order_lower" placeholder="请输入订购下限"></el-input>
      <el-input v-model="form.m_order_upper" placeholder="请输入订购上限"></el-input>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="form.m_order_window_ctrl" label="订货窗口控制"></el-checkbox>
      <el-checkbox v-model="form.m_order_check_store" label="下单判断库存"></el-checkbox>
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
    </el-form-item> -->
  </Form>
</template>

<script lang="ts">
import { defineComponent,reactive,ref } from 'vue'
import Form from '@/components/Form/index.vue';
import { m_status_data, m_type_data, radioData } from './../../list/enum'
export default defineComponent({
// do not use same name with ref
components:{
  Form
},
props:{
    basicInfo:{
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
    const form = ref({
      _id: "", //物料编号
      m_type: null, //物料类型
      m_name: "1111", //物料名称
      clf_ids:"",//物料分类
      m_package:"", //包装规则
      m_status:null,//物料状态，1:临时2:正常3:停购4:作废
      m_tax_ratio:"", //税率
      m_tax_code:"",//税收分类编码
      m_p_money_sell:"",//销售价格
      m_p_money_cost:"",//成本价格
      m_u_unit_purchase:"",//订购单位
      m_u_count_purchase:"",
      m_u_unit_stock:"",//库存单位
      m_u_count_stock:"",
      m_u_unit_bom:"",//BOM单位
      m_u_count_bom:"",
      m_u_unit_trans:"",//物流单位
      m_u_count_trans:"",
      m_storage_type:null,//储存方式:1-常温 2-冷藏 3-冷冻
      m_split_type:null,//m_split_type:"拆单方式。1:普通2:常温3:冷冻4:冷藏。"
      m_split_sub_type:null,//拆单子类型。1:物料小类2:日期。
      m_save_store:"", //"安全库存，大仓物料安全边界。"
      m_order_upper:null, //订购上限
      m_order_lower:null, //订购下限
      m_order_window_ctrl:null, // '订货窗口控制标识:1-是 0-否'
      m_order_check_store:null,// '下单判断库存:1-是 0-否',
      m_order_type:null, //订购类型 '1:统配,2:自采。',
    })
    const rules = reactive({
      clf_ids: [{ required: true, message: '不可为空', trigger: 'blur' }],
      m_package: [{ required: true, message: '不可为空', trigger: 'blur' }],
      m_name: [{ required: true, message: '物料名称不可为空', trigger: 'blur' }],
      m_classify: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_u_unit_bom: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_order_step_type: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_u_count_purchase: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_split_type: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_order_lower: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_order_upper: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_u_unit_trans: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_status: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_u_count_stock: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_storage_type: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_u_unit_stock: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_u_count_trans: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_type: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_split_sub_type: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_save_store: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_u_unit_purchase: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_source_type: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_sell_type: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_u_count_bom: [{ required: true, message: '不可为空', trigger: 'change' }],
      m_order_type: [{ required: true, message: '不可为空', trigger: 'change' }],
    });
    init()
    function init() { // 用于判断新增还是编辑功能
      if (props.basicInfo.row) {
        form.value = JSON.parse(JSON.stringify(props.basicInfo.row)) // 数量量少的直接使用这个转
      } else {

      }
    }
    const onSubmit = () => {
        console.log('submit!')
    }
    return{
        form,
        onSubmit,
        m_type_data,
        radioData,
        m_status_data,
        rules
    }
}

})
</script>
<style lang="scss" scoped>
  
</style>
