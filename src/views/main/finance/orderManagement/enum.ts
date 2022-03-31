
export const tabs = [
  {value:0,label:"已取消"},
	{value:1,label:"待付款"},
	{value:2,label:"待发货"},//已付款
	{value:3,label:"已发货"},//去验收
	{value:4,label:"部分收货"},//去验收
	{value:5,label:"已验收"},//全部收货
	{value:6,label:"待审核"},
	{value:7,label:"已审核"},
	{value:8,label:"退货中"},//申请退货
	{value:9,label:"退款中"},//申请退款
	{value:10,label:"已退货"},
	{value:11,label:"已退款"},
]

export const condition = [
  {
    type:'input',
    prop:'dict_group',
    placeholder:'请填写订单ID'
  },
  {
    type:'input',
    prop:'dict_name',
    placeholder:'请填写订单编号'
  },
  {
    type:'select',
    options:tabs,
    prop:'dict_key',
    placeholder:'请选择订单状态'
  },
  {
    type:'dateTime',
    prop:'createTime',
    placeholder:'请选择开始时间'
  },
  {
    type:'dateTime',
    prop:'endTime',
    placeholder:'请选择结束时间'
  },
]

export const columnArr = [
  {
    label:"订单ID",
    prop:'dict_group',
  },
  {
    label:"订单编号",
    prop:'dict_group',
  },
  {
    label:"联系人",
    prop:'dict_name',
  },
  {
    label:"联系方式",
    prop:'dict_key',
  },
  {
    label:"订单状态",
    prop:'dict_val_type_desc',
  },
  {
    label:"创建时间",
    prop:'dict_val_type_desc',
  },
]

export const searchData = {
  "eq":["dict_val_type"],
  "like":["dict_group","dict_key","dict_name"]
}