import { isEmpty } from '@/utils/system/validate'

export const condition = [
  {
    type:'input',
    prop:'wh_name',
    placeholder:'仓库名称'
  },
  // {
  //   type:'input',
  //   prop:'wh_addr',
  //   placeholder:'仓库地址'
  // },
]

export const columnArr = [
  {
    label:"仓库编号",
    prop:'wh_code',
  },
  {
    label:"仓库名称",
    prop:'wh_name',
  },
  {
    label:"仓库联系方式",
    prop:'wh_contact',
  },
  {
    label:"仓库地址",
    prop:'wh_addr',
  },
  {
    label:"描述",
    prop:'c_desc',
  },
  {
    label:"仓库操作人",
    prop:'c_update_user',
  },
  {
    label:"操作时间",
    prop:'c_update_time',
  },
]

export const itemArr = [
  {
    label:"仓库编号：",
    type:'input',
    prop:'wh_code',
  },
  {
    label:"仓库名称：",
    type:'input',
    prop:'wh_name',
  },
  {
    label:"联系方式：",
    type:'input',
    prop:'wh_contact',
  },
  {
    label:"仓库地址：",
    type:'input',
    prop:'wh_addr',
  },
  // {
  //   label:"到货周期：",
  //   type:'input',
  //   prop:'wh_val',
  //   placeholder:'以天为单位'
  // },
  // {
  //   label:"自动收货：",
  //   type:'input',
  //   prop:'wh_val',
  //   placeholder:'以小时为单位'
  // },
  // {
  //   label:"配送区域：",
  //   type:'input',
  //   prop:'wh_val',
  // },
  // {
  //   label:"启用状态：",
  //   type:'switch',
  //   prop:'wh_val_type',
  //   default:true,
  // },
  {
    label:"仓库记录描述：",
    type:'textarea',
    prop:'c_desc',
    width:'100%',
  },
  {
    label:"开放订货时间：",
    type:'switch',
    prop:'wh_o_is_opened_order_time',
    width:'30%',
    default:false,
  },
  {
    label:"订货开始：",
    type:'time',
    prop:'wh_o_start_time',
    placeholder:'请选择时分秒',
    width:'35%',
  },
  {
    label:"订货结束：",
    type:'time',
    prop:'wh_o_end_time',
    placeholder:'请选择时分秒',
    width:'35%',
  },
  {
    label:"是否停止订货：",
    type:'switch',
    prop:'wh_o_is_closed_date',
    width:'30%',
    default:false,
  },
  {
    label:"开始时间：",
    type:'dateTime',
    prop:'wh_o_closed_start_date',
    width:'35%',
  },
  {
    label:"结束时间：",
    type:'dateTime',
    prop:'wh_o_closed_end_date',
    width:'35%',
  },
]

export const searchData = {
  "eq":["wh_code"],
  "like":["wh_name","wh_addr","c_create_user"]
}
const dataParams = [
  "wh_name",//仓库的名称（必填）
  "wh_code",//仓库的编号（必填）
  "c_desc",//对当前记录的描述
  "wh_addr",//仓库的地址
  "wh_contact",//仓库的联系电话
]
const ruleParams = [
  "wh_o_is_opened_order_time",//仓库是否开放订货时间（必填）
  "wh_o_start_time",//仓库一天内开放时间，起始时间（必填）
  "wh_o_end_time",//仓库一天内开放时间，结束时间（必填）
  "wh_o_is_closed_date",//仓库是否开放停止订货。如过年（必填）
  "wh_o_closed_start_date",//仓库关闭时间，起始日期（必填）
  "wh_o_closed_end_date"//仓库关闭时间，结束日期（必填）
]
export const addData = {
  "data":dataParams,
  "ruleData":ruleParams
}

export const updateData={
  "eq":["_id"],
  "set":dataParams
}
export const updateRule={
  "eq":["_id"],
  "set":ruleParams
}

export const rules = {
  "wh_name":isEmpty("请填写仓库名称"),//仓库的名称（必填）
  "wh_code":isEmpty("请填写仓库编号"),//仓库的编号（必填）
  "wh_contact":isEmpty("请填写仓库联系电话"),//仓库的联系电话
  "wh_o_start_time":isEmpty("请填写一天内开放开始时间"),//仓库一天内开放时间，起始时间（必填）
  "wh_o_end_time":isEmpty("请填写一天内开放结束时间"),//仓库一天内开放时间，结束时间（必填）
  "wh_o_closed_start_date":isEmpty("请填写仓库关闭开始时间"),//仓库关闭时间，起始日期（必填）
  "wh_o_closed_end_date":isEmpty("请填写仓库关闭结束时间")//仓库关闭时间，结束日期（必填）
}