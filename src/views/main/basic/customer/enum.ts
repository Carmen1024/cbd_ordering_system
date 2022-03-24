import { isEmpty,isPhone } from '@/utils/system/validate';

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
//statusData typeData
export const statusData = [
  { value: 1, label: '正常'},
  { value: 2, label: '冻结'},
  { value: 3, label: '终止合作'},
]

export const typeData = [
  { value: 1, label: '门店'},
  { value: 2, label: '经销商'},
  { value: 3, label: '社会客户'},
]

export const condition = [
  {
    prop:'_id',
    type:'input',
    placeholder:"请填写客户ID",
  },
  {
    type:'input',
    prop:'user_name',
    placeholder:'请填写客户名称'
  },
  {
    type:'input',
    placeholder:"请填写财务主体编码",
    prop:'user_phone',
  },
  {
    type:'select',
    placeholder:"请选择客户状态",
    prop:'user_phone',
    options:statusData
  },
  {
    type:'select',
    placeholder:"请选择客户类型",
    prop:'user_phone',
    options:typeData
  },
]

export const columnArr = [
  {
    label:"客户ID",
    prop:'_id',
  },
  {
    label:"客户名称",
    prop:'user_name',
  },
  {
    label:"财务主体编码",
    prop:'user_phone',
  },
  {
    label:"客户类型",
    prop:'user_email',
  },
  {
    label:"联系人",
    prop:'user_email',
  },
  {
    label:"联系电话",
    prop:'user_email',
  },
  {
    label:"客户地址",
    prop:'user_email',
  },
  {
    label:"关联店铺数量",
    prop:'user_email',
  },
  {
    label:"客户状态",
    prop:'c_valid',
  },
]

export const itemArr = [
  {
    label:"客户名称：",
    type:'input',
    prop:'user_name',
    placeholder:'请填写客户名称'
  },
  {
    label:"财务主体编码：",
    type:'input',
    prop:'user_phone',
    placeholder:'请填写财务主体编码'
  },
  {
    label:"客户类型：",
    type:'select',
    prop:'user_email',
    placeholder:'请填写客户类型',
    options:typeData
  },
  {
    label:"客户状态：",
    type:'select',
    prop:'user_email',
    placeholder:'请填写客户类型',
    options:statusData
  },
  {
    label:"联系人：",
    type:'input',
    prop:'user_phone',
    placeholder:'请填写联系人'
  },
  {
    label:"联系电话：",
    type:'input',
    prop:'user_phone',
    placeholder:'请填写联系电话'
  },
  {
    label:"客户地址：",
    type:'textarea',
    prop:'user_phone',
    placeholder:'请填写客户地址',
    width:'100%'
  },
]

export const searchFormat = {
  "eq":["_id","s_id"],
  "like":["user_name","user_phone"]
}

export const updateFormat = {
  "eq":["_id"],
  "set":[
    "user_phone",
    "user_name",
    "user_pass",
    "user_email"
  ]
}


export const rules = {
  // user_name: isEmpty('请填写姓名'),
  // user_phone: isPhone(),
}