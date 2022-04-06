<template>
  <div class="formContainer">
    <el-form ref="basicInfoForm" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="商品名称" prop="m_name">
        <el-input v-model="form.m_name"></el-input>
      </el-form-item>
      <el-form-item label="商品类型" prop="m_type">
        <el-select v-model="form.m_type" clearable placeholder="请选择商品类型">
          <el-option
            v-for="item in options.m_type_data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品分类" prop="clf_ids">
        <el-input v-model="form.clf_ids"></el-input>
      </el-form-item>
      <el-form-item label="包装规则" prop="m_package">
        <el-input v-model="form.m_package"></el-input>
      </el-form-item>
      <el-form-item label="商品状态" prop="m_status">
        <el-select v-model="form.m_status" clearable placeholder="请选择商品状态">
          <el-option
            v-for="item in options.m_status_data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="存储方式" prop="m_storage_type">
        <el-select v-model="form.m_storage_type" clearable placeholder="请选择存储方式">
          <el-option
            v-for="item in options.m_storage_type_data"
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
      <el-form-item label="三级单位" style="width:25%" prop="m_u_count_purchase">
      <el-input v-model="form.m_u_count_purchase" placeholder="请填写订购单位" ></el-input>
      </el-form-item>
      <el-form-item label="" style="width:15%" label-width="10px" prop="m_u_unit_purchase">
        <el-select v-model="form.m_u_unit_purchase" clearable placeholder="请选择订购单位">
          <el-option
            v-for="item in options.m_u_unit_purchase_data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="" style="width:15%" label-width="10px" prop="m_u_count_stock">
        <el-input v-model="form.m_u_count_stock" placeholder="请填写库存单位"></el-input>
      </el-form-item>
      <el-form-item label="" style="width:15%" label-width="10px" prop="m_u_unit_stock">
        <el-select v-model="form.m_u_unit_stock" clearable placeholder="请选择库存单位">
          <el-option
            v-for="item in options.m_u_unit_purchase_data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="" style="width:15%" label-width="10px" prop="m_u_count_bom">
        <el-input v-model="form.m_u_count_bom" placeholder="请填写BOM单位" ></el-input>
      </el-form-item>
      <el-form-item label="" style="width:15%" label-width="10px" prop="m_u_unit_bom">
        <el-select v-model="form.m_u_unit_bom" clearable placeholder="请选择BOM单位">
          <el-option
            v-for="item in options.m_u_unit_purchase_data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="物流单位" style="width:35%" prop="m_u_count_trans">
        <el-input v-model="form.m_u_count_trans" placeholder="请填写物流单位数" ></el-input>
      </el-form-item>
      <el-form-item label="" style="width:15%" label-width="10px" prop="m_u_unit_trans">
        <el-select v-model="form.m_u_unit_trans" clearable placeholder="请选择物流单位">
          <el-option
            v-for="item in options.m_u_unit_purchase_data"
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
            v-for="item in options.m_order_type_data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="拆单方式" style="width:30%" prop="m_split_type">
        <el-select v-model="form.m_split_type" clearable placeholder="请选择拆单方式">
          <el-option
            v-for="item in options.m_split_type_data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="" style="width:20%" label-width="10px" prop="m_split_sub_type">
        <el-select v-model="form.m_split_sub_type" clearable placeholder="请选择拆单子类型">
          <el-option
            v-for="item in options.m_split_sub_type_data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="安全库存" prop="m_save_store">
        <el-input v-model="form.m_save_store"></el-input>
      </el-form-item>
      <el-form-item label="订购限制" style="width:30%" prop="m_order_lower">
        <el-input v-model="form.m_order_lower" placeholder="请填写订购下限"></el-input>
      </el-form-item>     
      <el-form-item label="" style="width:20%" label-width="10px" prop="m_order_upper">
        <el-input v-model="form.m_order_upper" placeholder="请填写订购上限"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="form.m_order_window_ctrl" label="订货窗口控制"></el-checkbox>
        <el-checkbox v-model="form.m_order_check_store" label="下单判断库存"></el-checkbox>
      </el-form-item>
    </el-form>
  </div>
  <div class="handle-container">
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </div>
</template>

<script lang="ts">
  import { defineComponent,reactive,ref,Ref } from 'vue'
  import { options } from './../../list/enum'
  import type { ElFormItemContext } from 'element-plus/lib/el-form/src/token'
  import { materialInsert,materialUpdate } from '@/api/material/material';
  export default defineComponent({
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
        const basicInfoForm: Ref<ElFormItemContext|null> = ref(null)
        const form = ref({
          m_type: null, //商品类型
          m_name: "", //商品名称
          clf_ids:"",//商品分类
          m_package:"", //包装规则
          m_status:null,//商品状态，1:临时2:正常3:停购4:作废
          m_tax_ratio:"", //税率
          m_tax_code:"",//税收分类编码
          m_p_money_sell:"",//销售价格
          m_p_money_cost:"",//成本价格
          m_u_unit_purchase:null,//订购单位
          m_u_count_purchase:null,
          m_u_unit_stock:null,//库存单位
          m_u_count_stock:null,
          m_u_unit_bom:null,//BOM单位
          m_u_count_bom:null,
          m_u_unit_trans:null,//物流单位
          m_u_count_trans:null,
          m_storage_type:null,//储存方式:1-常温 2-冷藏 3-冷冻
          m_split_type:null,//m_split_type:"拆单方式。1:普通2:常温3:冷冻4:冷藏。"
          m_split_sub_type:null,//拆单子类型。1:商品小类2:日期。
          m_save_store:null, //"安全库存，大仓商品安全边界。"
          m_order_upper:null, //订购上限
          m_order_lower:null, //订购下限
          m_order_window_ctrl:null, // '订货窗口控制标识:1-是 0-否'
          m_order_check_store:null,// '下单判断库存:1-是 0-否',
          m_order_type:null, //订购类型 '1:统配,2:自采。',
        })
        const rules = reactive({
          clf_ids: [{ required: true, message: '不可为空', trigger: 'blur' }],
          m_package: [{ required: true, message: '不可为空', trigger: 'blur' }],
          m_name: [{ required: true, message: '商品名称不可为空', trigger: 'blur' }],
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
        return{
            form,
            options,
            rules,
            basicInfoForm
        }
    },
    methods: {
      onSubmit() {
        if (this.basicInfoForm) {
          this.basicInfoForm.validate((valid) => {
            if (valid) {
              if (this.basicInfo.row) {
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
        let params = this.form
        materialInsert(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.$emit('getNodeData', this.form,true)
        })
      },
      // 编辑提交事件
      updateForm() {
        let form = this.form;
        const { _id } = form;
        const {
          m_type,
          m_name,
          clf_ids,
          m_package,
          m_status,
          m_tax_ratio,
          m_tax_code,
          m_p_money_sell,
          m_p_money_cost,
          m_u_unit_purchase,
          m_u_count_purchase,
          m_u_unit_stock,
          m_u_count_stock,
          m_u_unit_bom,
          m_u_count_bom,
          m_u_unit_trans,
          m_u_count_trans,
          m_storage_type,
          m_split_type,
          m_split_sub_type,
          m_save_store,
          m_order_upper,
          m_order_lower,
          m_order_window_ctrl,
          m_order_check_store,
          m_order_type,
        } = form
        let params = {
          eq:{
            _id
          },
          set:{
            m_type,
            m_name,
            clf_ids,
            m_package,
            m_status,
            m_tax_ratio,
            m_tax_code,
            m_p_money_sell,
            m_p_money_cost,
            m_u_unit_purchase,
            m_u_count_purchase,
            m_u_unit_stock,
            m_u_count_stock,
            m_u_unit_bom,
            m_u_count_bom,
            m_u_unit_trans,
            m_u_count_trans,
            m_storage_type,
            m_split_type,
            m_split_sub_type,
            m_save_store,
            m_order_upper,
            m_order_lower,
            m_order_window_ctrl,
            m_order_check_store,
            m_order_type,
          }
        }
        materialUpdate(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '编辑成功'
          })
          this.$emit('getNodeData', this.form,false)
        })
      }
    }

  })
</script>
<style lang="scss" scoped>
  
</style>
