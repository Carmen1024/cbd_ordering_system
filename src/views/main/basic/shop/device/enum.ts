export const valTypeData = [
  { value: 1, label: '字符串类型', type:'采购'},
  { value: 2, label: '整数类型', type:'仓管' },
  { value: 3, label: '布尔类型', type:'财务' },
]
export const roleData = [
  { value: 1, label: '角色1'},
  { value: 2, label: '角色2'},
  { value: 3, label: '角色3'},
  { value: 4, label: '角色4'},
]


export const condition = [
  {
    type:'select',
    prop:'dict_group',
    placeholder:'请选择平台'
  },
  {
    type:'select',
    prop:'dict_group',
    placeholder:'请选择门店'
  },
  {
    type:'input',
    prop:'dict_group',
    placeholder:'请填写设备Key'
  },
  {
    type:'select',
    prop:'dict_group',
    placeholder:'请选择激活状态'
  },
  {
    type:'select',
    prop:'dict_group',
    placeholder:'请选择联机状态'
  },
  {
    type:'select',
    prop:'dict_group',
    placeholder:'请选择可用状态'
  },
]

export const columnArr = [
  {
    label:"设备Key",
    prop:'_id',
  },
  {
    label:"激活状态",
    prop:'user_name',
  },
  {
    label:"练级状态",
    prop:'user_key',
  },
  {
    label:"可用状态",
    prop:'user_val_type_desc',
  },
  {
    label:"所属门店",
    prop:'user_val_type_desc',
  },
  {
    label:"LOT平台",
    prop:'user_val_type_desc',
  },
  {
    label:"SN编号",
    prop:'user_val_type_desc',
  },
  {
    label:"设备型号",
    prop:'user_val_type_desc',
  },
  {
    label:"打印任务",
    prop:'user_val_type_desc',
  },
  {
    label:"状态",
    prop:'c_valid',
    type:'handle'
  },
]

export const itemArr = [
  {
    label:"平台：",
    type:'select',
    prop:'dict_group',
    placeholder:'请选择平台'
  },
  {
    label:"门店：",
    type:'select',
    prop:'dict_group',
    placeholder:'请选择门店'
  },
  {
    label:"设备Key：",
    type:'input',
    prop:'dict_group',
    placeholder:'请填写设备Key'
  },
  {
    label:"激活状态：",
    type:'select',
    prop:'dict_group',
    placeholder:'请选择激活状态'
  },
  {
    label:"联机状态：",
    type:'select',
    prop:'dict_group',
    placeholder:'请选择联机状态'
  },
  {
    label:"可用状态：",
    type:'select',
    prop:'dict_group',
    placeholder:'请选择可用状态'
  },
  {
    label:"LOT平台",
    type:'input',
    prop:'dict_group',
    placeholder:'请填写LOT平台'
  },
  {
    label:"SN编码：",
    type:'input',
    prop:'dict_group',
    placeholder:'请填写SN编码'
  },
  {
    label:"设备型号：",
    type:'input',
    prop:'dict_group',
    placeholder:'请填写设备型号'
  },
]

export const searchData = {
  "eq":["_id","user_val_type"],
  "like":["user_group","user_key","user_name"]
}

export const rules = {
  user_val_type: [{ required: true, message: '请选择字典类型', trigger: 'blur' }],
  user_key: [{ required: true, message: '请填写字典英文名称', trigger: 'blur' }],
  user_name: [{ required: true, message: '请填写字典名称', trigger: 'blur' }],
  user_val: [{ required: true, message: '请填写字典值', trigger: 'blur' }],
}