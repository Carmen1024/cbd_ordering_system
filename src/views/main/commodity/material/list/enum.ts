import { isEmpty } from '@/utils/system/validate'

export const condition = [
  {
    type:'input',
    prop:'clf_name',
    placeholder:'商品分组'
  },
  {
    type:'input',
    prop:'m_code',
    placeholder:'商品编码'
  },
  {
    type:'input',
    prop:'m_name',
    placeholder:'商品名称'
  },
]

export const columnArr = [
  {
    label:"商品编码",
    prop:'m_code',
  },
  {
    label:"商品名称",
    prop:'m_name',
  },
  {
    label:"商品分组",
    prop:'clf_names',
  },
  {
    label:"订货规则",
    prop:'m_order_step_type_desc',
  },
  {
    label:"商品类型",
    prop:'m_type_desc',
  },
  {
    label:"拆单方式",
    prop:'m_split_type_desc',
  },
  {
    label:"销售类型",
    prop:'m_sell_type_desc',
  },
  {
    label:"商品状态",
    prop:'m_status_desc',
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
  // <el-input v-model="query.clf_name" placeholder="请填写商品分组" @change="getTableData(true)"></el-input>
// <el-input v-model="query.like.m_code" placeholder="请填写商品编码" @change="getTableData(true)"></el-input>
// <el-input v-model="query.like.m_name" placeholder="请填写商品名称" @change="getTableData(true)"></el-input>

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

export const options = {
  //订货规则
  //"doc_m_order_step_type": "，1:按倍数递增,2:按逐1递增",
  m_order_step_type_data : [
    { value: 1, label: '按倍数递增' },
    { value: 2, label: '按逐1递增' },
  ],

  //商品状态
  //"doc_m_status": "，1:临时2:正常3:停购4:作废。",
  m_status_data : [
    { value: 1, label: '临时' },
    { value: 2, label: '正常' },
    { value: 3, label: '停购' },
    { value: 4, label: '作废' },
  ],

  //"doc_m_type": "商品类型，1:原料分类,2:设备,3:服务",
  m_type_data : [
    { value: 1, label: '原料分类' },
    { value: 2, label: '设备' },
    { value: 3, label: '服务' },
  ],

  //拆单方式
  //"doc_m_split_type": "。1:普通 2:常温 3:冷冻 4:冷藏",
  m_split_type_data : [
    { value: 1, label: '普通' },
    { value: 2, label: '常温' },
    { value: 3, label: '冷冻' },
    { value: 4, label: '冷藏' },
  ],

  //拆单子类型
  // "doc_m_split_sub_type": "拆单子类型。1:商品小类2:日期。",
  m_split_sub_type_data : [
    { value: 1, label: '商品小类' },
    { value: 2, label: '日期' },
  ],

  //销售类型
  //"doc_m_sell_type": "，1:普通商品,2:预售商品。",
  m_sell_type_data : [
    { value: 1, label: '普通商品' },
    { value: 2, label: '预售商品' },
  ],

  // "doc_m_source_type": "商品来源类型，1:自建,2:sap。",
  m_source_type_data : [
    { value: 1, label: '自建' },
    { value: 2, label: 'sap' },
  ],

  //doc_m_order_type:"1:统配,2:自采。"
  m_order_type_data : [
    { value: 1, label: '统配' },
    { value: 2, label: '自采' },
  ],

  m_storage_type_data : [
    { value: 1, label: '常温' },
    { value: 2, label: '冷藏' },
    { value: 3, label: '冷冻' },
  ],

  //订购单位 库存单位 BOM单位
  m_u_unit_purchase_data : [
    { value: 1, label: '箱' },
    { value: 2, label: '盒' },
    { value: 3, label: '条' },
  ],

  m_s_brand_data:[
    { value: 1, label: '蒙牛' },
    { value: 2, label: '伊利' },
    { value: 3, label: '光明' },
  ],

  m_s_origin_place_data:[
    { value: 1, label: '上海' },
    { value: 2, label: '内蒙' },
    { value: 3, label: '四川' },
  ],

  m_s_grade_data:[
    { value: 1, label: '一级' },
    { value: 2, label: '特级' },
    { value: 3, label: '优' },
  ]

  // "m_s_attachment_file": "",
  // "m_s_grade": -1,
  // "m_s_desc": "",
  // "m_s_origin_place": "",
  // "m_s_main_picture": "",
  // "m_id": "", //商品id
  // "m_s_brand": ""

}
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

export const materialStateData = [
  { value: 1, label: '室温' },
  { value: 2, label: '冷藏' },
  { value: 3, label: '冷冻' },
]

export const sData = [
  { value: 1, label: '分类一' },
  { value: 2, label: '分类二' },
  { value: 3, label: '分类三' },
  { value: 4, label: '分类四' }
]
  //三级单位
export const unitData = [
  { value: 1, label: '箱' },
  { value: 2, label: '盒' },
  { value: 3, label: '条' },
]
//1-是 0-否
export const radioData = [
  { value: 1, label: '是' },
  { value: 0, label: '否' },
]
export const selectData = {
  "like":[
    "clf_m_code", //商品编码
    "clf_name", //分类名称
    "m_name" //分类名称
  ]
}
