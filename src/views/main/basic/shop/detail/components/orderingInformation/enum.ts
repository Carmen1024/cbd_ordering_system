export const valTypeData = [
  { value: 1, label: '字符串类型', type:'String'},
  { value: 2, label: '整数类型', type:'Number' },
  { value: 3, label: '布尔类型', type:'Boolean' },
  { value: 4, label: '数组类型', type:'Array' },
  { value: 5, label: '对象类型', type:'Object' },
  { value: 6, label: '对象数组类型', type:'Array<Object>' },
]

export const condition = []

export const columnArr = [
  {
    label:"账号类型",
    prop:'user_group',
  },
  {
    label:"姓名",
    prop:'user_name',
  },
  {
    label:"账号",
    prop:'user_key',
  },
  {
    label:"角色",
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
    label:"员工姓名：",
    type:'input',
    prop:'user_group',
    placeholder:'请填写组名'
  },
  {
    label:"账号类型：",
    type:'input',
    prop:'user_name',
    placeholder:'请填写字典中文名'
  },
  {
    label:"登录账号：",
    type:'input',
    prop:'user_key',
    placeholder:'请填写字典英文名'
  },
  {
    label:"员工角色：",
    type:'select',
    prop:'user_val_type',
    options:valTypeData,
    placeholder:'请选择字典类型'
  },
  {
    label:"重置密码：",
    type:'input',
    prop:'user_val',
    placeholder:'请按照选择类型输入'
  },
  {
    label:"备注：",
    type:'switch',
    prop:'user_val',
    placeholder:'请按照选择类型输入'
  },
  {
    label:"启动状态：",
    type:'switch',
    prop:'user_val',
    placeholder:'请按照选择类型输入'
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