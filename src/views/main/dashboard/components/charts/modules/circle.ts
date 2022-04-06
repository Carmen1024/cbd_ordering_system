const option = {
  title: {
    text: '商品分类汇总',
    left: 'left'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'right'
  },
  series: [
    {
      name: '商品',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 10
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '26',
          fontWeight: 'bold',
          formatter: (p) => {
            let dom = `<div backgroundColor="red">1</div>`
            return p.name + '\n' + p.value
          }
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 17, name: '水果类' },
        { value: 10, name: '其他' },
        { value: 5, name: '粉料类' },
        { value: 39, name: '半成品类' },
        { value: 24, name: '茶叶类' },
        { value: 1, name: '自制类' },
      ]
    }
  ]
};

export default option