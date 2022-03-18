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
    placeholder:'请输入组名'
  },
  {
    type:'input',
    prop:'dict_name',
    placeholder:'请输入字典中文名'
  },
  {
    type:'input',
    prop:'dict_key',
    placeholder:'请输入字典英文名'
  },
  {
    type:'select',
    prop:'dict_val_type',
    options:valTypeData,
    placeholder:'请选择字典类型'
  },
]

export const columnArr = [
  {
    label:"组名",
    prop:'dict_group',
  },
  {
    label:"字典名称",
    prop:'dict_name',
  },
  {
    label:"字典英文名",
    prop:'dict_key',
  },
  {
    label:"字符串类型",
    prop:'dict_val_type_desc',
  },
  {
    label:"是否有效",
    prop:'c_valid',
    type:'handle'
  },
]

export const itemArr = [
  {
    label:"组名：",
    type:'input',
    prop:'dict_group',
    placeholder:'请输入组名'
  },
  {
    label:"字典中文名：",
    type:'input',
    prop:'dict_name',
    placeholder:'请输入字典中文名'
  },
  {
    label:"字典英文名：",
    type:'input',
    prop:'dict_key',
    placeholder:'请输入字典英文名'
  },
  {
    label:"字典类型：",
    type:'select',
    prop:'dict_val_type',
    options:valTypeData,
    placeholder:'请选择字典类型'
  },
  {
    label:"字典值：",
    type:'textarea',
    prop:'dict_val',
    placeholder:'请按照选择类型输入'
  },
]

export const searchData = {
  "eq":["dict_val_type"],
  "like":["dict_group","dict_key","dict_name"]
}