import { isEmpty } from '@/utils/system/validate'

export const condition = [
  {
    type:'input',
    prop:'wh_name',
    placeholder:'仓库名称'
  },
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
  like:["clf_name"],
  eq:["clf_su_id"]
}

export const rules = {
  
}