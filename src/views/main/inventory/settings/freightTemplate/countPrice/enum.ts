export const valTypeData = [
  { value: 1, label: '字符串类型', type:'String'},
  { value: 2, label: '整数类型', type:'Number' },
  { value: 3, label: '布尔类型', type:'Boolean' },
  { value: 4, label: '数组类型', type:'Array' },
  { value: 5, label: '对象类型', type:'Object' },
  { value: 6, label: '对象数组类型', type:'Array<Object>' },
]

export const condition = [
  {
    type:'input',
    prop:'dict_group',
    placeholder:'单据编号'
  },
  {
    type:'select',
    prop:'dict_name',
    placeholder:'客户'
  },
  {
    type:'select',
    prop:'dict_name',
    placeholder:'所属部门'
  },
  {
    type:'dataTime',
    prop:'dict_key',
    placeholder:'更新开始时间'
  },
  {
    type:'dataTime',
    prop:'dict_val_type',
    placeholder:'更新结束时间'
  },
]

export const columnArr = [
  {
    label:"单据日期",
    prop:'dict_group',
  },
  {
    label:"单据编号",
    prop:'dict_name',
  },
  {
    label:"客户",
    prop:'dict_key',
  },
  {
    label:"单据类型",
    prop:'dict_val_type_desc',
  },
  {
    label:"单据金额",
    prop:'dict_val_type_desc',
  },
  {
    label:"付款状态",
    prop:'dict_val_type_desc',
  },
  {
    label:"单据状态",
    prop:'dict_val_type_desc',
  },
  {
    label:"制单人",
    prop:'dict_val_type_desc',
  },
  {
    label:"所属部门",
    prop:'dict_val_type_desc',
  },
]

export const itemArr = [
  {
    label:"费用编号：",
    type:'input',
    prop:'dict_group',
    placeholder:'与SAP保持一致'
  },
  {
    label:"费用名称：",
    type:'input',
    prop:'dict_name',
    placeholder:'与SAP保持一致'
  },
  {
    label:"费用金额：",
    type:'input',
    prop:'dict_key',
    placeholder:'请填写收费金额'
  },
  {
    label:"自由金额：",
    type:'switch',
    prop:'dict_val_type',
  },
  {
    label:"审核控制：",
    type:'switch',
    prop:'dict_val',
  },
  {
    label:"收款公司：",
    type:'select',
    prop:'dict_val',
    placeholder:''
  },
  {
    label:"费用科目：",
    type:'select',
    prop:'dict_val',
    placeholder:''
  },
  {
    label:"费用类别：",
    type:'select',
    prop:'dict_val',
    placeholder:''
  },
  {
    label:"缴费周期：",
    type:'select',
    prop:'dict_val',
    placeholder:''
  },
  {
    label:"费用类型说明：",
    type:'textarea',
    prop:'dict_val',
    width:'100%',
    placeholder:'请填写费用类型说明'
  },
  {
    label:"自由金额：",
    type:'switch',
    prop:'dict_val_type',
  },
]

export const searchData = {
  "eq":["dict_val_type"],
  "like":["dict_group","dict_key","dict_name"]
}

export const rules = {
  dict_val_type: [{ required: true, message: '请选择字典类型', trigger: 'blur' }],
  dict_key: [{ required: true, message: '请填写字典英文名称', trigger: 'blur' }],
  dict_name: [{ required: true, message: '请填写字典名称', trigger: 'blur' }],
  dict_val: [{ required: true, message: '请填写字典值', trigger: 'blur' }],
}