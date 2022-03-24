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
    placeholder:'请填写原因'
  }
]

export const columnArr = [
  {
    label:"编号",
    prop:'dict_group',
  },
  {
    label:"原因",
    prop:'dict_name',
  },
  {
    label:"状态",
    prop:'c_valid',
    type:'handle'
  },
]

export const itemArr = [
  {
    label:"编号：",
    type:'input',
    prop:'dict_group',
    placeholder:'请填写编号'
  },
  {
    label:"退款原因：",
    type:'input',
    prop:'dict_name',
    placeholder:'请填写退款原因'
  },
  {
    label:"退款原因说明：",
    type:'textarea',
    prop:'dict_val',
    placeholder:'请填写退款原因说明',
    width:'100%'
  },
  {
    label:"启用状态：",
    type:'switch',
    prop:'c_valid',
  },
]

export const searchData = {
  "eq":["dict_val_type"],
  "like":["dict_group","dict_key","dict_name"]
}

export const rules = {
  
}