import { isEmpty,isPhone,isEmail } from '@/utils/system/validate';

export const tableHandles = [
  { value: "edit", label: '编辑'},
  { value: "delete", label: '删除'},
  { value: "editPass", label: '重置密码'},
]

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

//员工编码 姓名 联系电话 所属门店
export const condition = [
  {
    prop:'_id',
    type:'input',
    placeholder:"请填写员工ID",
  },
  {
    type:'input',
    prop:'user_name',
    placeholder:'请填写员工姓名'
  },
  {
    type:'input',
    placeholder:"输入员工手机号",
    prop:'user_phone',
  },
]
export const columnArr = [
  {
    label:"商品编码",
    prop:'_id',
  },
  {
    label:"商品名称",
    prop:'user_name',
  },
  {
    label:"商品分组",
    prop:'user_phone',
  },
  {
    label:"订购单位",
    prop:'user_email',
  },
  {
    label:"关联数量",
    prop:'c_valid',
    type:'handle'
  },
]

export const itemArr = [
  {
    label:"商品编码：",
    type:'input',
    prop:'user_name',
  },
  {
    label:"商品名称：",
    type:'input',
    prop:'user_phone',
  },
  {
    label:"商品分组：",
    type:'select',
    prop:'user_email',
  },
  {
    label:"订购单位：",
    type:'input',
    prop:'user_name',
  },
  {
    label:"关联数量：",
    type:'input',
    prop:'user_name',
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
  user_name: isEmpty('请填写姓名'),
  user_phone: isPhone(),
  user_email: isEmail()
}