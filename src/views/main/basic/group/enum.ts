import { isEmpty } from "@/utils/system/validate"

export const typeData = [
  { value: 1, label: '门店物料分组'},
  { value: 2, label: '门店分组' },
  { value: 3, label: '用户分组' },
  { value: 4, label: '自定义物料分组' },
]
export const vaildData = [
  { value: true, label: '有效'},
  { value: false, label: '无效'},
]            

export const condition = [
  {
    type:'input',
    prop:'g_name',
    placeholder:'分组名称'
  },
  {
    type:'input',
    prop:'g_code',
    placeholder:'分组编码'
  },
  {
    type:'select',
    prop:'g_type',
    placeholder:'全部分组类型',
    options:typeData
  },
  {
    type:'select',
    prop:'c_valid',
    options:vaildData,
    placeholder:'全部状态'
  },
]

export const columnArr = [
  {
    label:"分组ID",
    prop:'_id',
  },
  {
    label:"分组编码",
    prop:'g_code',
  },
  {
    label:"分组名称",
    prop:'g_name',
  },
  {
    label:"分组类型",
    prop:'g_type_desc',
  },
  {
    label:"是否有效",
    prop:'c_valid',
    type:'handle'
  },
]

export const itemArr = [
  {
    label:"分组编号",
    type:'input',
    prop:'g_code',
    width:'100%'
  },
  {
    label:"分组名称",
    type:'input',
    prop:'g_name',
    placeholder:'',
    width:'100%'
  },
  {
    label:"分组类型",
    type:'select',
    prop:'g_type',
    options:typeData,
    placeholder:'',
    width:'100%'
  },
  {
    label:"启用状态",
    type:'switch',
    prop:'c_valid',
    default:true
  },

]

export const searchData = {
  "eq":["g_code","g_type","c_valid"],
  "like":["g_name"]
}
export const updateData = {
  "eq":["_id"],
  "set":["g_code","g_type","c_valid","g_name"]
}

export const rules = {
  g_code: isEmpty("请填写分组编号"),
  g_name: isEmpty("请填写分组名称"),
  g_type: isEmpty("请选择分组类型"),
}