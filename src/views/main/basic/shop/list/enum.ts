//门店类型，1:直营店 ,2:加盟店 ,3:经销商 ,4:社会客户 。
export const typeData = [
  { value: 1, label: '直营店' },
  { value: 2, label: '加盟店' },
  { value: 3, label: '经销商' },
  { value: 4, label: '社会客户' },
]

//门店状态，1:正常营业 2:暂停营业 3:永久关闭
export const statusData = [
  { value: 1, label: '正常营业' },
  { value: 2, label: '暂停营业' },
  { value: 3, label: '永久关闭' },
]

//发货类型
export const deliverTypeData = [
  { value: 1, label: '公司物流（收运费）' },
  { value: 2, label: '三方物流' },
  { value: 3, label: '自提' },
  { value: 4, label: '快递' },
]

export const condition = [
  {
    type:'input',
    prop:'_id',
    placeholder:'请填写门店ID',
  },
  {
    type:'input',
    prop:'s_code',
    placeholder:'请填写门店编号',
  },
  {
    type:'input',
    prop:'s_name',
    placeholder:'请填写门店名称'
  },
  {
    type:'select',
    prop:'s_status',
    options:statusData,
    placeholder:'请选择门店状态'
  },
  {
    type:'select',
    prop:'s_type',
    options:typeData,
    placeholder:'请填写门店类型'
  },
  {
    type:'input',
    prop:'s_charge_name',
    placeholder:'请填写门店负责人'
  },
  {
    type:'input',
    prop:'s_charge_phone_num',
    placeholder:'请填写负责人电话'
  },
  {
    type:'input',
    prop:'s_code',
    placeholder:'请填写门店编号'
  },
  {
    type:'input',
    prop:'s_addr',
    placeholder:'请填写门店地址'
  },
]
export const columnArr = [
  {prop:'s_code',label:'门店编码'},
  {prop:'s_name',label:'门店名称'},
  {prop:'s_type_desc',label:'门店类型'}, //门店类型，1:直营店,2:加盟店,3:经销商,4:社会客户。
  {prop:'s_charge_name',label:'联系人'},
  {prop:'s_charge_phone_num',label:'联系电话'},
  {prop:'s_addr',label:'门店地址'},
  {prop:'s_status_desc',label:'门店状态'}, //门店状态，1:正常营业2:暂停营业3:永久关闭。
  {
    label:"是否有效",
    prop:'c_valid',
    type:'handle'
  },
]

export const searchData = {
  "eq":[
    "s_type",
    "a_id",
    "g_id",
    "s_status",
    "wh_id",
    "deliver_type",
    "_id",
    "s_code",
  ],
 "like":[
    "s_charge_name",
    "s_charge_phone_num",
    "s_name",
    "s_addr"
  ],
}