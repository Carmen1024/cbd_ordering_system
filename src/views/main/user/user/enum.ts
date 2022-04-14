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

//用户编码 姓名 联系电话 所属门店
export const condition = [
  {
    type:'input',
    prop:'user_name',
    placeholder:'请填写用户姓名'
  },
  {
    type:'input',
    placeholder:"输入用户手机号",
    prop:'user_phone',
  },
]

export const columnArr = [
  {
    label:"用户ID",
    prop:'_id',
  },
  {
    label:"用户姓名",
    prop:'user_name',
  },
  {
    label:"手机号",
    prop:'user_phone',
  },
  {
    label:"邮箱",
    prop:'user_email',
  },
  {
    label:"是否有效",
    prop:'c_valid',
    type:'handle'
  },
]
export const columnArrStore = [
  {
    label:"用户姓名",
    prop:'user_name',
  },
  {
    label:"手机号",
    prop:'user_phone',
  },
  {
    label:"邮箱",
    prop:'user_email',
  },
  {
    label:"是否有效",
    prop:'c_valid',
    type:'handle'
  },
]

export const itemArr = [
  {
    label:"用户姓名：",
    type:'input',
    prop:'user_name',
    placeholder:'请填写用户姓名'
  },
  {
    label:"手机号：",
    type:'input',
    prop:'user_phone',
    placeholder:'请填写手机号'
  },
  {
    label:"邮箱：",
    type:'input',
    prop:'user_email',
    placeholder:'请填写邮箱',
    width:'100%'
  }
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