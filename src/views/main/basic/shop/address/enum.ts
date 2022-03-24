import { validatePhone } from '@/utils/system/validate';

export const defaultData = [
  { value: 0, label: '非默认' },
  { value: 1, label: '默认' },
]
//1：待审核，2：审核通过，3：审核失败',
export const auditStatusOptions = [
  { value: 1, label: '待审核'},
  { value: 2, label: '审核通过'},
  { value: 3, label: '审核失败'},
]


export const condition = []

export const columnArr = [
  {
    label:"收货人",
    prop:'s_a_name',
  },
  {
    label:"联系电话",
    prop:'s_a_phone',
  },
  {
    label:"省",
    prop:'s_a_province',
  },
  {
    label:"市",
    prop:'s_a_city',
  },
  {
    label:"区",
    prop:'s_a_area',
  },
  {
    label:"收货地址",
    prop:'s_a_detail',
  },
  {
    label:"是否默认",
    prop:'s_a_default_desc',
  },
  {
    label:"审核状态",
    prop:'s_a_audit_status_desc',
  },
  {
    label:"审核备注",
    prop:'s_a_audit_desc',
  },
]

export const itemArr = [
  {
    label:"收货人：",
    type:'input',
    prop:'s_a_name',
    placeholder:'请填写收货人'
  },
  {
    label:"联系电话：",
    type:'input',
    prop:'s_a_phone',
    placeholder:'请填写联系电话'
  },
  {
    label:"省市区：",//"s_a_province":"","s_a_city":"","s_a_area":"","s_a_postcode"
    type:'area',
    prop:'areaGroup',
  },
  {
    label:"是否默认：",
    type:'select',
    prop:'s_a_default',
    options:defaultData,
  },
  {
    label:"地址详情：",
    type:'textarea',
    prop:'s_a_detail',//"s_a_detail":""
    width:"100%",
  },
  {
    label:"邮编：",
    type:'input',
    prop:'s_a_postcode',//"s_a_detail":""
    placeholder:'请填写邮编'
  },
  {
    label:"审核状态",
    type:"select",
    prop:'s_a_audit_status',
    options:auditStatusOptions
  },
  {
    label:"审核备注",
    type:"textarea",
    prop:'s_a_audit_desc',
    width:"100%"
  },
]

export const searchFormat = {
  "eq":["s_id"]
}
export const updateFormat = {
  "eq":["_id"],
  "set":[ 
    "s_a_phone",
    "s_a_name",
    "s_a_postcode",
    "s_a_province",
    "s_a_city",
    "s_a_area",
    "s_a_detail",
    "s_a_default",
    "s_a_audit_status",
    "s_a_audit_desc",
    "s_id"
  ]
}


export const rules = {
  s_a_phone: [
    { required: true, message: '请填写手机号', trigger: 'blur' },
    { validator: validatePhone, trigger: 'blur' }
  ],
  s_a_name:[
    { required: true, message: '请填写手机号', trigger: 'blur' },
  ],
  areaGroup:[
    { required: true, message: '请选择省市区', trigger: 'blur' },
  ],
  s_a_detail:[
    { required: true, message: '请填写地址详情', trigger: 'blur' },
  ],
}