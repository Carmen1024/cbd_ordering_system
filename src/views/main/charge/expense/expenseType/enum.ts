import { isEmpty } from '@/utils/system/validate';

export const cycleData = [
  {value: 1, label: '年度收取'},
  {value: 2, label: '季度收取'},
  {value: 3, label: '月度收取'},
  {value: 4, label: '按次收取'},
]

export const typeData = [
  {value: 1, label: '财务类'},
  {value: 2, label: '市场类'},
  {value: 3, label: '招商类'},
  {value: 4, label: 'it类'},
]

export const companyData = [
  {value: '茶韵', label: '茶韵'},
  {value: '致远', label: '致远'},
  {value: '培训学校', label: '培训学校'},
  {value: '信息公司', label: '信息公司'},
]

export const condition = [
  {
    type:'input',
    prop:'cost_name',
    placeholder:'费用名称'
  },
  {
    type:'input',
    prop:'c_create_user',
    placeholder:'创建人'
  },
  {
    type:'dataTime',
    prop:'createTime',
    placeholder:'开始时间'
  },
  {
    type:'dataTime',
    prop:'endTime',
    placeholder:'截止时间'
  },
]

export const columnArr = [
  {
    label:"编号",
    prop:'cost_code',
  },
  {
    label:"名称",
    prop:'cost_name',
  },
  {
    label:"金额",
    prop:'cost_money',
  },
  {
    label:"创建人",
    prop:'c_create_user',
  },
  {
    label:"更新日期",
    prop:'c_update_time',
  },
  {
    label:"状态",
    prop:'c_valid',
    type:'handle'
  },
]

export const itemArr = [
  {
    label:"费用编号：",
    type:'input',
    disabled:true,
    prop:'cost_code',
    placeholder:'与SAP保持一致'
  },
  {
    label:"费用类型名称：",
    type:'input',
    prop:'cost_name',
    placeholder:'与SAP保持一致'
  },
  {
    label:"自由金额：",
    type:'switch',
    prop:'cost_is_free',
    default:false,
    width:'30%'
  },
  {
    label:"审核控制：",
    type:'switch',
    prop:'cost_is_audit',
    default:false,
    width:'30%'
  },
  {
    label:"是否启动：",
    type:'switch',
    prop:'c_valid',
    default:true,
    width:'30%'
  },
  {
    label:"费用金额：",
    type:'input',
    prop:'cost_money',
    placeholder:'请填写收费金额'
  },
  {
    label:"收款公司：",
    type:'select',
    options:companyData,
    prop:'cost_company',
    placeholder:''
  },
  {
    label:"费用类别：",
    type:'select',
    prop:'cost_type',
    options:typeData,
    placeholder:''
  },
  {
    label:"缴费周期：",
    type:'select',
    prop:'cost_payment_cycle',
    options:cycleData,
    placeholder:''
  },
  {
    label:"费用类型说明：",
    type:'textarea',
    prop:'c_desc',
    width:'100%',
    placeholder:'请填写费用类型说明'
  },
]

export const searchData = {
  "like":["cost_name","c_create_user"],
  "gte":["c_create_time"],
  "lte":["c_update_time"],
}

export const updateData = [
  "cost_name", "cost_money", "cost_company", "cost_type", "cost_is_free", 
  "cost_is_audit", "cost_task_type", "c_desc", "cost_payment_cycle", "c_valid", "cost_code"
]

export const rules = {
  cost_name: isEmpty("请填写费用类型名称"),
  cost_company: isEmpty("请选择费用类型名称"),
  cost_payment_cycle: isEmpty("请选择缴费周期"),
  cost_type: isEmpty("请选择费用类别"),
}