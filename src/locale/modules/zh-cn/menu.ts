export default {
  menu: {
    dashboard: {
      name: '茶百道订货系统管理平台',
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
    user:{
      name:"用户中心",
      account:{
        name:"我的账号"
      },
      user:"用户列表",
      permission:"权限列表"
    },
    basic:{
      name:"门店管理",
      customer:"客户管理",
      shop:{
        name:"门店管理",
        list:"门店列表",
        staff:"员工列表",
        coupon:"优惠券列表",
        device:"设备列表",
        role:"角色列表"
      },
      systemDictionary:"系统字典",
      operationLog:"操作日志",
      interfaceTask:"接口任务",
      receipt:"单据配置",
    },
    inventory:{
      name:"仓库管理",
      storeHouse:"仓库管理",
      material:{
        name:"商品管理",
        classify:"商品分组",
        list:"商品列表",
        detail:"商品详情",
        bom:{
          name:"商品BOM管理",
          list:"BOM列表",
          version:"BOM版本",
          relatedProduct:"关联商品",
        },
        orderFile:"订货档案"
      },
      transactions:{
        name:"库存交易"
      },
    },
    charge:{
      name:'费用管理',
      service:{
        name:'服务费收取'
      },
      expense:{
        name:"费用设置",
        expenseType:"费用类型",
        // refundReason:"退款原因"
      },
      // chargeManagement:{
      //   name:"收费管理",
      //   chargeBill:"收款单管理",
      //   refundBill:"退款单管理"
      // }
    },
    finance:{
      name:'订单中心',
      orderManagement:"订购单",
      chargeBill:"收货单",
      refundBill:"退货单",
      feeInquiry:"出库单",
    },
    marketing:{
      name:'营销中心',
      coupon:"优惠券",
      rebate:"返利管理",
      credits:"促销活动",
    },
    // project:{
    //   name:"项目管理",
    //   code:{
    //     name:"代码管理",
    //     base:"接口列表",
    //     business:"枚举"
    //   },
    //   version:"开发版本",
    //   developer:"开发人员"
    // },
    ruleSettings:{
      name:"规则设置",
      orderWindow:"订货窗口",
      priceLevel:"价格等级",
      transferRelationship:"调拨规则",
      freightTemplate:{
        name:"运费管理",
        list:"运费模板",
        countPrice:"计件规则"
      },
      orderRules:"订货规则",
      group:"分组管理"
    },
    commodity:{
      name:"商品管理",
      classify:"商品分类",
      // group:"商品分类",
      material:"商品列表",
      detail:"商品详情",
      orderFile:"订货档案",
      combo:"套餐商品"
    },
    deploy:{
      name:"系统设置",
      systemDictionary:"系统字典",
      operationLog:"系统日志",
      interfaceTask:"接口任务",
      receipt:"单据配置",
      announcement:"公告推送",
      code:"接口列表",
    },
    statistics:{
      name:"数据统计",
      salesTurnover:"交易流水",
    }
  },
}