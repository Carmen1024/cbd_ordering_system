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
    placeholder:'规则名称'
  },
  {
    type:'select',
    prop:'dict_name',
    placeholder:'生效区域'
  },
]

export const columnArr = [
  {
    label:"编号",
    prop:'dict_group',
  },
  {
    label:"规则名称",
    prop:'dict_name',
  },
  {
    label:"规则描述",
    prop:'dict_key',
  },
  {
    label:"订货窗口",
    prop:'dict_val_type_desc',
  },
  {
    label:"生效地区",
    prop:'dict_val_type_desc',
  },
  {
    label:"例外门店",
    prop:'dict_val_type_desc',
  },
  {
    label:"操作时间",
    prop:'dict_val_type_desc',
  },
  {
    label:"操作人",
    prop:'dict_val_type_desc',
  },
]

export const itemArr = [
  {
    label:"规则ID",
    type:'input',
    prop:'dict_group',
    placeholder:''
  },
  {
    label:"规则名称",
    type:'input',
    prop:'dict_name',
    placeholder:''
  },
  {
    label:"规则说明",
    type:'textarea',
    prop:'dict_key',
    width:'100%',
    placeholder:''
  },
  {
    label:"生效区域",
    type:'switch',
    prop:'dict_val_type',
  },
  {
    label:"例外门店",
    type:'switch',
    prop:'dict_val',
  },
  {
    label:"窗口期设置",
    type:'select',
    prop:'dict_val',
    placeholder:''
  },
  {
    label:"备注",
    type:'select',
    prop:'dict_val',
    placeholder:''
  },
  {
    label:"启用状态",
    type:'switch',
    prop:'dict_val_type',
  },
]

export const searchData = {
  "eq":["dict_val_type"],
  "like":["dict_group","dict_key","dict_name"]
}

export const rules = {
  // dict_val_type: [{ required: true, message: '请选择字典类型', trigger: 'blur' }],
  // dict_key: [{ required: true, message: '请填写字典英文名称', trigger: 'blur' }],
  // dict_name: [{ required: true, message: '请填写字典名称', trigger: 'blur' }],
  // dict_val: [{ required: true, message: '请填写字典值', trigger: 'blur' }],
}