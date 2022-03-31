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
      name:"个人中心",
      account:{
        name:"我的账号"
      }
    },
    basic:{
      name:"基础管理",
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
      },
      storeHouse:"仓库管理",
      material:{
        name:"物料管理",
        classify:"物料分类",
        list:"物料列表",
        detail:"物料详情",
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
      salesTurnover:{
        name:"门店销售流水"
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
      chargeManagement:{
        name:"收费单管理",
        chargeBill:"收款单",
        refundBill:"退款单"
      },
      orderManagement:"商品订单管理",
      feeInquiry:"门店缴费记录",
      name:'财务管理',
      rebate:"返利管理",
      credits:"信用额度",
    },
    project:{
      name:"项目管理",
      code:{
        name:"代码管理",
        base:"接口列表",
        business:"枚举"
      },
      version:"开发版本",
      developer:"开发人员"
    }
  },
}