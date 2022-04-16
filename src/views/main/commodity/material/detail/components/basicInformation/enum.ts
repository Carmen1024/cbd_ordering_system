import { isPhone,isEmpty } from '@/utils/system/validate'
import { useStore } from 'vuex';

export const storageData = [
  {value:1,label:"普通"},
  {value:2,label:"常温"},
  {value:3,label:"冷藏"},
  {value:4,label:"冷冻"},
]

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
export const statusData = [
  {value:1,label:"下架"},
  {value:2,label:"正常"},
]

//sell_type
export const sellTypeData = [
  {value:1,label:"普通商品"},
  {value:2,label:"预售商品"},
]

export const normalData = [
  {value:1,label:1},
  {value:2,label:2},
]

export const itemArr = [
  {
    type:'title',
    placeholder:'基本信息',
    width:'100%'
  },
  {
    label:"商品编号",
    type:'input',
    prop:'m_code',
  },
  {
    label:"商品名称",
    type:'input',
    prop:'m_name',
  },
  {
    label:"销售组",
    type:'select',
    prop:'s_name',
  },
  {
    label:"商品分类",
    type:'cascader',
    prop:'m_classify_id_arr',
    cascaderProps:{
      value:"_id",
      label:"clf_name"
    }
  },
  {
    label:"包装规则",
    type:'input',
    prop:'m_package',
  },
  {
    label:"状态",
    type:'select',
    options:statusData,
    prop:'m_status',
  },
  {
    label:"销售价格",
    type:'inputNumber',
    prop:'m_p_money',
    precision:2,
  },
  // --------------------------------------------------------
  {
    type:'title',
    placeholder:'销售信息',
    width:'100%'
  },
  {
    label:"订购单位",
    type:'select',
    prop:'order_unit',
    options:normalData
  },
  {
    label:"库存单位",
    type:'select',
    prop:'stock_unit',
    options:normalData
  },
  {
    label:"BOM单位",
    type:'select',
    prop:'bom_unit',
    options:normalData
  },
  {
    label:"销售形式",
    type:'select',
    prop:'m_sell_type',
    options:sellTypeData,
  },
  {
    label:"储存方式",
    type:'select',
    prop:'m_storage_type',
    options:storageData,
  },
  {
    label:"拆单方式",
    type:'select',
    prop:'m_split_type',
    options:normalData,
  },
  {
    label:"运费",
    type:'select',
    prop:'m_is_cac_freight',
    options:normalData
  },
  {
    label:"起订量",
    type:'inputNumber',
    prop:'m_order_lower',
  },
  {
    label:"最大订购量",
    type:'inputNumber',
    prop:'m_order_upper',
  },
  {
    label:"订货窗口控制",
    type:'select',
    prop:'m_order_window_ctrl',
    default:false,
    options:normalData
  },
  {
    label:"订货库存校验",
    type:'select',
    prop:'m_is_check_stock',
    default:false,
    options:normalData
  },
  {
    label:"起订量倍数订货",
    type:'select',
    prop:'dict_name',
    default:false,
    options:normalData
  },
  // ---------------------------------------------
  {
    type:'title',
    placeholder:'附加消息',
    width:'100%'
  },
  {
    label:"商品描述",
    type:'input',
    prop:'m_s_desc',
  },
  {
    label:"品牌",
    type:'select',
    prop:'m_s_brand',
    options:normalData
  },
  {
    label:"产地",
    type:'select',
    prop:'m_s_origin_place',
    options:normalData
  },
  {
    label:"商品主图",
    type:'pictureCard',
    prop:'m_s_main_picture',
    placeholder:'',
    width:'100%'
  },
  {
    label:"补充附件",
    type:'UploadList',
    prop:'m_s_attachment_file',
    width:'100%'
  },
]

export const rules = {
  m_p_money : isEmpty(),
  m_name : isEmpty(),
  m_code : isEmpty(),
  order_unit : isEmpty(),
  m_sell_type : isEmpty(),
  order_unit_count : isEmpty(),
  stock_unit_count : isEmpty(),
  m_order_step_type : isEmpty(),
  bom_unit_count : isEmpty(),
  m_split_type : isEmpty(),
  m_order_lower : isEmpty(),
  m_order_upper : isEmpty(),
  bom_unit : isEmpty(),
  m_storage_type : isEmpty(),
  stock_unit : isEmpty(),
  m_is_cac_freight : isEmpty(),
  m_status : isEmpty(),
  clf_b_id : isEmpty(),
  m_package : isEmpty(),
  m_is_check_stock : isEmpty(),
}