import { isEmpty,isPhone } from '@/utils/system/validate';

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

//单据编码 名称 联系电话 所属门店
export const condition = [
  {
    prop:'_id',
    type:'input',
    placeholder:"请填写单据ID",
  },
  {
    type:'input',
    prop:'user_name',
    placeholder:'请填写单据名称'
  },
  {
    type:'input',
    placeholder:"请填写单据说明",
    prop:'user_phone',
  },
]

export const columnArr = [
  {
    label:"单据ID",
    prop:'_id',
  },
  {
    label:"单据名称",
    prop:'user_name',
  },
  {
    label:"单据说明",
    prop:'user_phone',
  },
  {
    label:"审核节点",
    prop:'user_email',
  },
  {
    label:"状态",
    prop:'c_valid',
    type:'handle'
  },
]

export const itemArr = [
  {
    label:"单据名称：",
    type:'input',
    prop:'user_name',
    placeholder:'请填写单据名称'
  },
  {
    label:"审核节点：",
    type:'select',
    prop:'user_email',
    placeholder:'请选择审核节点',
  },
  {
    label:"单据说明：",
    type:'textarea',
    prop:'user_phone',
    placeholder:'请填写单据说明',
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
  user_name: isEmpty('请填写名称'),
  user_phone: isPhone(),
}