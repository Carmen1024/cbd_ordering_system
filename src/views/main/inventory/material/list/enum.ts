import { bizDictRow } from '@/api/project/bizDict';
import exp from 'constants';

// export const optionType = [""]

// export const getOptions = (type)=>{
//   const params = {
//     "eq": {
//       "dict_type": 1,
//       "dict_group": type
//     }
//   }
//   return bizDictRow(params).then(res=>{
//     //dict_val_int dict_val_str
//     const data = res.data.map(item=>{
//       return item.dict_val_int && {value:item.dict_val_int,label:item.dict_val_str}
//     })
//     console.log(data);
//     // Promise.resolve(data)
//   })
// }

export const options = {
  //订货规则
  //"doc_m_order_step_type": "，1:按倍数递增,2:按逐1递增",
  m_order_step_type_data : [
    { value: 1, label: '按倍数递增' },
    { value: 2, label: '按逐1递增' },
  ],

  //物料状态
  //"doc_m_status": "，1:临时2:正常3:停购4:作废。",
  m_status_data : [
    { value: 1, label: '临时' },
    { value: 2, label: '正常' },
    { value: 3, label: '停购' },
    { value: 4, label: '作废' },
  ],

  //"doc_m_type": "物料类型，1:原料分类,2:设备,3:服务",
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
  // "doc_m_split_sub_type": "拆单子类型。1:物料小类2:日期。",
  m_split_sub_type_data : [
    { value: 1, label: '物料小类' },
    { value: 2, label: '日期' },
  ],

  //销售类型
  //"doc_m_sell_type": "，1:普通商品,2:预售商品。",
  m_sell_type_data : [
    { value: 1, label: '普通商品' },
    { value: 2, label: '预售商品' },
  ],

  // "doc_m_source_type": "物料来源类型，1:自建,2:sap。",
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
  // "m_id": "", //物料id
  // "m_s_brand": ""

}
export const materialTypeData = [
  { value: 1, label: '物料' },
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

export const selectData = [
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


