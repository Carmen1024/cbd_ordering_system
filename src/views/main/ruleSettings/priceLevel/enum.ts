
import {isEmpty} from '@/utils/system/validate';
export const condition = [
  {
    type:'input',
    prop:'_id',
    placeholder:'ID'
  },
  {
    type:'input',
    prop:'r_p_code',
    placeholder:'规则代号'
  },
  {
    type:'select',
    prop:'r_p_name',
    placeholder:'规则名称'
  },
]

export const columnArr = [
  {
    label:"编号",
    prop:'_id',
  },
  {
    label:"规则代号",
    prop:'r_p_code',
  },
  {
    label:"规则名称",
    prop:'r_p_name',
  },
  {
    label:"优惠等级",
    prop:'r_p_discount',
  }
]

export const itemArr = [
  {
    label:"规则代号：",
    type:'input',
    prop:'r_p_code',
  },
  {
    label:"规则名称：",
    type:'input',
    prop:'r_p_name',
  },
  {
    label:"优惠等级：",
    type:'input',
    prop:'r_p_discount',
  },
  {
    label:"是否启用：",
    type:'switch',
    default:false,
    prop:'c_valid',
  },
]

export const searchData = {
  "eq":["_id"],
  "like":["r_p_code","r_p_name"]
}

export const rules = {
  r_p_code: isEmpty("请填写规则编号"),
  r_p_name: isEmpty("请填写规则名称"),
  r_p_discount: isEmpty("请填写优惠等级"),
}