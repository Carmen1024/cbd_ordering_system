export default {
  menu: {
    dashboard: {
      name: '百茶百道订货系统',
      index: '首页'
    },
    system: {
      name: '系统目录',
      redirect: '重定向页面',
      '404': '404',
      '401': '401'
    },
    echarts: {
      name: 'echarts图表',
      bar: '柱状图',
      line: '折线图',
      pie: '饼图',
      radar: '雷达图',
      map: '地图',
    },
    // 以下
    material:{
      name:"物料管理",
      list:"物料列表",
      detail:"物料详情",
      sort:"物料分类"
    },
    basic:{
      name:"系统管理",
      customer:{
        name:"客户管理",
        list:"客户列表"
      },
      shop:{
        name:"门店管理",
        list:"门店列表",//包含当前门店：员工 订购 优惠券 设备 信息变更记录
        staff:"员工列表",
        coupon:"优惠券列表",
        device:"设备列表",
        role:"角色列表"
      },
      systemDictionary:"系统字典",
      userAndPermission:{
        name:"用户与权限",
        user:"用户列表",
        permission:"权限列表"
      },
      operationLog:"操作日志",
      interfaceTask:"接口任务",
      receipt:"单据配置",
    },
    inventory:{
      name:"库存管理",
      settings:{
        name:"库存设置",
        orderWindow:"订货窗口",
        priceLevel:"价格等级",
        storeHouse:"仓库管理",
        transferRelationship:"调拨关系",
        scrapReason:"报废原因",
        freightTemplate:{
          name:"运费管理",
          list:"运费模板",
          countPrice:"计件规则"
        },
        orderRules:"订货规则",
      },
      material:{
        name:"物料管理",
        sort:"物料分类",
        list:"物料列表",
        detail:"物料详情",
        bom:"商品BOM管理",
        orderFile:"订货档案"
      },
      transactions:{
        name:"库存交易"
      },
      salesTurnover:{
        name:"门店销售流水"
      },
    },

  },
}