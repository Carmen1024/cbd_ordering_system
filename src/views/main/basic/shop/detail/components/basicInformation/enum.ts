import { statusData,typeData,deliverTypeData } from './../../../list/enum';
import { isPhone,isEmpty } from '@/utils/system/validate';

export const materialTypeData = [
  { value: 1, label: '商品' },
  { value: 2, label: '物资' },
  { value: 3, label: '设备' },
  { value: 4, label: '半成品' },
  { value: 5, label: '替代品' },
]

export const materialStatusData = [
  { value: 1, label: '临时' },
  { value: 2, label: '正常' },
  { value: 3, label: '停购' },
  { value: 4, label: '作废' },
]

export const itemArr = [
  {
    type:'title',
    placeholder:'客户基本信息',
    width:'100%'
  },
  {
    label:"门店ID:",
    type:'input',
    disabled:true,
    prop:'_id',
    placeholder:'最多12个字符'
  },
  {
    label:"组织编码",
    type:'input',
    prop:'s_code',
    placeholder:''
  },
  {
    label:"门店名称",
    type:'input',
    prop:'s_name',
    placeholder:'请填写门店名称'
  },
  // {
  //   label:"门店组织",
  //   type:'select',
  //   prop:'dict_name',
  //   placeholder:'请选择门店组织'
  // },
  {
    label:"门店类型",
    type:'select',
    prop:'s_type',
    options:typeData,
    placeholder:''
  },
  {
    label:"联系人",
    type:'input',
    prop:'s_charge_name',
    placeholder:'请填写联系人'
  },
  {
    label:"联系电话",
    type:'input',
    prop:'s_charge_phone_num',
    placeholder:'请填写联系方式'
  },
  {
    label:"门店地址",
    type:'input',
    prop:'s_addr',
    placeholder:''
  },
  {
    label:"门店状态",
    type:'select',
    prop:'s_status',
    placeholder:'',
    options:statusData
  },
  // {
  //   label:"门店组别",
  //   type:'select',
  //   prop:'g_id',
  //   placeholder:''
  // },
  {
    label:"门店标签",
    type:'input',
    prop:'s_tags',
    placeholder:'请填写门店标签，用逗号隔开'
  },
  {
    label:"营业执照",
    type:'pictureCard',
    prop:'s_license_pic',
    placeholder:'',
    width:'100%'
  },
  // {
  //   label:"附件",
  //   type:'UploadList',
  //   prop:'pictureList',
  //   placeholder:'',
  //   width:'100%'
  // },
  // ---------------------------------------------
  {
    type:'title',
    placeholder:'财务结算信息',
    width:'100%'
  },
  // {
  //   label:"归属客户：",
  //   type:'input',
  //   prop:'company_id',
  //   placeholder:''
  // },
  // {
  //   label:"客户编码：",
  //   type:'input',
  //   prop:'dict_name',
  //   placeholder:''
  // },
  {
    label:"财务主题编码",
    type:'input',
    prop:'s_settle_main_no',
    placeholder:''
  },
  {
    label:"订货需要审核",
    type:'switch',
    prop:'s_settle_is_audit',
    default:false,
  },
  {
    label:"发票抬头",
    type:'input',
    prop:'s_receipt_head',
    placeholder:''
  },
  // {
  //   label:"信控额度",
  //   type:'input',
  //   prop:'dict_name',
  //   placeholder:''
  // },
  {
    label:"返利额度",
    type:'input',
    prop:'s_settle_refund_money',
    placeholder:''
  },
  {
    label:"纳税人识别号",
    type:'input',
    prop:'s_license_no',
    placeholder:'请填写纳税人识别号'
  },
  {
    label:"付款方式",
    type:'select',
    prop:'s_settle_pay_type',
    placeholder:''
  },
  // ---------------------------------------------
  {
    type:'title',
    placeholder:'订购信息',
    width:'100%'
  },
  {
    label:"价格等级",
    type:'select',
    prop:'r_p_id',
    placeholder:''
  },
  {
    label:"运费规则",
    type:'select',
    prop:'r_f_id',
    placeholder:''
  },
  {
    label:"发货仓库",
    type:'select',
    prop:'wh_id',
    placeholder:''
  },
  {
    label:"调拨规则",
    type:'select',
    prop:'r_t_id',
    placeholder:''
  },
  {
    label:"订货窗口",
    type:'select',
    prop:'r_o_p_id',
    placeholder:''
  },
  {
    label:"订货规则",
    type:'select',
    prop:'r_c_o_id',
    placeholder:''
  },
  {
    label:"发货方式",
    type:'select',
    prop:'deliver_type',
    placeholder:'',
    options:deliverTypeData
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