export const valTypeData = [
  { value: 1, label: '字符串类型', type:'String'},
  { value: 2, label: '整数类型', type:'Number' },
  { value: 3, label: '布尔类型', type:'Boolean' },
  { value: 4, label: '数组类型', type:'Array' },
  { value: 5, label: '对象类型', type:'Object' },
  { value: 6, label: '对象数组类型', type:'Array<Object>' },
]
export const vaildData = [
  { value: true, label: '有效'},
  { value: false, label: '无效'},
]

export const condition = [
  {
    type:'select',
    prop:'r_c_o_code',
    placeholder:'请填写规则编码'
  },
  {
    type:'input',
    prop:'r_c_o_name',
    placeholder:'请填写规则名称'
  },
  {
    type:'select',
    prop:'c_valid',
    options:vaildData,
    placeholder:'状态'
  },
]

export const columnArr = [
  {
    label:"规则编码",
    prop:'r_c_o_code',
  },
  {
    label:"规则名称",
    prop:'r_c_o_name',
  },
  // {
  //   label:"规则描述",
  //   prop:'dict_name',
  // },
  {
    label:"开始时间",
    prop:'r_c_o_valid_start',
  },
  {
    label:"结束时间",
    prop:'r_c_o_valid_end',
  },
  {
    label:"更新时间",
    prop:'dict_val_type_desc',
  },
  {
    label:"操作人",
    prop:'dict_val_type_desc',
  },
  {
    label:"状态",
    prop:'c_valid',
  },
]

export const itemArr = [
  {
    label:"规则编号：",
    type:'input',
    prop:'r_c_o_code',
    placeholder:'请填写规则编码'
  },
  {
    label:"规则名称：",
    type:'input',
    prop:'r_c_o_name',
    placeholder:'请填写规则名称'
  },
  // {
  //   label:"规则描述：",
  //   type:'textarea',
  //   prop:'dict_val_type',
  //   width:'100%'
  // },
  {
    label:"开始时间：",
    type:'dataTime',
    prop:'r_c_o_valid_start',
  },
  {
    label:"结束时间：",
    type:'dataTime',
    prop:'r_c_o_valid_end',
  },
  {
    label:"启用状态：",
    type:'switch',
    prop:'c_valid',
    placeholder:''
  },
  {
    label:"物料规则：",
    type:'materialRule',
    prop:'rule_cycle_order_detail',
    width:"100%"
  },
]

export const searchData = {
  "eq":["dict_val_type"],
  "like":["dict_group","dict_key","dict_name"]
}

export const rules = {
  
}