
export const condition = [
  {
    type:'input',
    prop:'dict_group',
    placeholder:'单据编号'
  },
  {
    type:'select',
    prop:'dict_name',
    placeholder:'客户'
  },
  {
    type:'select',
    prop:'dict_name',
    placeholder:'所属部门'
  },
  {
    type:'dataTime',
    prop:'dict_key',
    placeholder:'查询开始时间'
  },
  {
    type:'dataTime',
    prop:'dict_val_type',
    placeholder:'查询结束时间'
  },
]

export const columnArr = [
  {
    label:"单据日期",
    prop:'dict_group',
  },
  {
    label:"单据编号",
    prop:'dict_name',
  },
  {
    label:"客户",
    prop:'dict_key',
  },
  // {
  //   label:"单据类型",
  //   prop:'dict_val_type_desc',
  // },
  {
    label:"单据金额",
    prop:'dict_val_type_desc',
  },
  {
    label:"付款状态",
    prop:'dict_val_type_desc',
  },
  {
    label:"制单人",
    prop:'dict_val_type_desc',
  },
  {
    label:"所属部门",
    prop:'dict_val_type_desc',
  },
  {
    label:"单据状态",
    prop:'c_valid',
    type:'handle'
  },
]

export const itemArr = [
  {
    label:"单据编号：",
    type:'input',
    prop:'dict_group',
    disabled:true,
    placeholder:'自动生成'
  },
  {
    label:"单据名称：",
    type:'input',
    prop:'dict_name',
    placeholder:'与SAP保持一致'
  },
  {
    label:"单据金额：",
    type:'input',
    prop:'dict_key',
    placeholder:'请填写收费金额'
  },
  {
    label:"自由金额：",
    type:'switch',
    prop:'dict_val_type',
  },
  {
    label:"审核控制：",
    type:'switch',
    prop:'dict_val',
  },
  {
    label:"收款公司：",
    type:'select',
    prop:'dict_val',
    placeholder:''
  },
  {
    label:"单据科目：",
    type:'select',
    prop:'dict_val',
    placeholder:''
  },
  {
    label:"单据类别：",
    type:'select',
    prop:'dict_val',
    placeholder:''
  },
  {
    label:"缴费周期：",
    type:'select',
    prop:'dict_val',
    placeholder:''
  },
  {
    label:"单据类型说明：",
    type:'textarea',
    prop:'dict_val',
    width:'100%',
    placeholder:'请填写单据类型说明'
  },
  {
    label:"自由金额：",
    type:'switch',
    prop:'dict_val_type',
  },
]

export const searchData = {
  "eq":["dict_val_type"],
  "like":["dict_group","dict_key","dict_name"]
}

export const rules = {
  // dict_val_type: [{ required: true, message: '请选择字典类型', trigger: 'blur' }],
  // dict_key: [{ required: true, message: '请填写字典英文名称', trigger: 'blur' }],
  // dict_name: [{ required: true, message: '请填写字典名称', trigger: 'blur' }],
  // dict_val: [{ required: true, message: '请填写字典值', trigger: 'blur' }],
}