const option = {
  title: {
    text: '门店数量汇总',
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
      name: '门店数量',
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
        { value: 1106, name: '西南' },
        { value: 134, name: '华北' },
        { value: 136, name: '东北' },
        { value: 306, name: '西北' },
        { value: 700, name: '中南' },
        { value: 1312, name: '华东' },
      ]
    }
  ]
};

export default option