export const materialTypeData = [
  { value: 1, label: '商品' },
  { value: 2, label: '物资' },
  { value: 3, label: '设备' },
  { value: 4, label: '半成品' },
  { value: 5, label: '替代品' },
]

export const materialStatusData = [
  { value: 1, label: '临时' },
  { value: 2, label: '正常' },
  { value: 3, label: '停购' },
  { value: 4, label: '作废' },
]

export const itemArr = [
  {
    label:"归属客户:",
    type:'select',
    prop:'dict_group',
    placeholder:''
  },
  {
    label:"客户编码",
    type:'input',
    prop:'dict_name',
    placeholder:''
  },
  {
    label:"财务主题编码",
    type:'input',
    prop:'dict_name',
    placeholder:''
  },
  {
    label:"订货需要审核",
    type:'select',
    prop:'dict_name',
    placeholder:''
  },
  {
    label:"发票抬头",
    type:'input',
    prop:'dict_name',
    placeholder:''
  },
  {
    label:"信控额度",
    type:'input',
    prop:'dict_name',
    placeholder:''
  },
  {
    label:"返利额度",
    type:'input',
    prop:'dict_name',
    placeholder:''
  },
  {
    label:"纳税人识别号",
    type:'input',
    prop:'dict_name',
    placeholder:''
  },
  {
    label:"付款方式",
    type:'input',
    prop:'dict_name',
    placeholder:''
  },

]

export const rules = {
  dict_val_type: [{ required: true, message: '请选择字典类型', trigger: 'blur' }],
  dict_key: [{ required: true, message: '请填写字典英文名称', trigger: 'blur' }],
  dict_name: [{ required: true, message: '请填写字典名称', trigger: 'blur' }],
  dict_val: [{ required: true, message: '请填写字典值', trigger: 'blur' }],
}