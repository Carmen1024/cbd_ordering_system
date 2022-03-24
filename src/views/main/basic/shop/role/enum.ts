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


export const condition = []

export const columnArr = [
  {
    label:"角色ID",
    prop:'_id',
  },
  {
    label:"角色名称",
    prop:'user_name',
  },
  {
    label:"角色说明",
    prop:'user_key',
  },
  {
    label:"更新时间",
    prop:'user_val_type_desc',
  },
  {
    label:"创建人",
    prop:'user_val_type_desc',
  },
  {
    label:"备注",
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
    label:"角色名称：",
    type:'input',
    prop:'user_group',
    placeholder:'请填写名称'
  },
  {
    label:"角色说明",
    type:'textarea',
    prop:'user_name',
    placeholder:'请填写说明',
    width:'100%'
  },
  {
    label:"备注：",
    type:'textarea',
    prop:'user_val',
    placeholder:'请填写角色备注',
    width:'100%'
  },
  {
    label:"查看金额：",
    type:'switch',
    prop:'user_val',
    placeholder:''
  },
  {
    label:"启用状态：",
    type:'switch',
    prop:'user_val',
    placeholder:''
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