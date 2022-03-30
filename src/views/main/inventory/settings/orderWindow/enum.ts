export const dayData = [
  { value: 1, label: '周一'},
  { value: 2, label: '周二' },
  { value: 3, label: '周三' },
  { value: 4, label: '周四' },
  { value: 5, label: '周五' },
  { value: 6, label: '周六' },
  { value: 7, label: '周七' },
]

export const condition = [
  {
    type:'input',
    prop:'dict_group',
    placeholder:'规则名称'
  },
  {
    type:'input',
    prop:'dict_name',
    placeholder:'订货窗口'
  },
  {
    type:'input',
    prop:'dict_name',
    placeholder:'生效区域'
  },
]

export const columnArr = [
  {
    label:"规则ID",
    prop:'_id',
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
    label:"规则名称",
    type:'input',
    prop:'dict_name',
    placeholder:''
  },
  {
    label:"启用状态",
    type:'switch',
    prop:'c_valid',
    default:false
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
    type:'checkboxButton',
    prop:'dict_val_type',
    width:'100%',
    options:dayData,
    default:[],
  },
  {
    label:"例外门店",
    type:'textarea',
    prop:'dict_val',
    width:'100%',
  },
  {
    label:"窗口期设置",
    type:'checkboxButton',
    prop:'dict_val',
    width:'100%',
    options:dayData,
    default:[],
    placeholder:''
  },
  {
    label:"备注",
    type:'textarea',
    prop:'dict_val',
    placeholder:'',
    width:'100%',
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