import { isPhone,isEmpty } from '@/utils/system/validate';
import { options } from '../../../enum';

export const typeData = [
  {value:1,label:"销售"},
]

export const statusData = [
  {value:1,label:"正常"},
  {value:0,label:"下架"},
]

export const styleData = [
  {value:0,label:"固定套餐"},
]

export const materialStatusData = [
  { value: 1, label: '临时' },
  { value: 2, label: '正常' },
  { value: 3, label: '停购' },
  { value: 4, label: '作废' },
]

export const itemArr = [
  {
    label:'商品编码',
    type:'input',
    prop:'code'
  },
  {
    label:"套餐名称:",
    type:'input',
    prop:'name',
  },
  {
    label:"销售类型",
    type:'select',
    prop:'s_code',
    placeholder:'',
    options:typeData
  },
  {
    label:"套餐价格",
    type:'input',
    prop:'price',
  },
  {
    label:"执行方式",
    type:'select',
    prop:'style',
    options:styleData
  },
  {
    label:"状态",
    type:'select',
    prop:'s_type',
    options:statusData,
  },
  
]

export const rules = {
  s_name: isEmpty('请填写门店名称'),
  s_type: isEmpty('请选择门店类型'),
  s_status: isEmpty('请选择门店状态'),
  s_tags: isEmpty('请填写门店标签'),
  s_charge_name:isEmpty('请填写联系人'),
  s_charge_phone_num:isPhone('请填写联系方式'),
  s_receipt_head:isEmpty('请填写发票抬头'),
  s_license_no:isEmpty('请填写纳税人识别号'),
}

export const updateFormat = {
  "eq":["_id"],
  "set":[
    "s_type","s_code","s_name","s_charge_name","s_charge_phone_num","s_addr",
    "s_longitude","s_latitude","s_tags","m_b_id",
    "rg_id","a_id","g_id","s_status","r_p_id",
    "r_f_id","wh_id","r_t_id","r_o_p_id","r_c_o_id","deliver_type",
    "company_id","s_recept_type","s_receipt_head","s_settle_refund_money",
    "s_settle_pay_type","s_settle_is_audit","s_settle_main_no","s_license_no","s_license_pic"
  ]
}