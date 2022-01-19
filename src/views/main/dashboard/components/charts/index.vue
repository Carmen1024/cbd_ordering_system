<template>
  <div>
    <el-row :gutter="20">
      <el-col :lg="12" :md="24">
       <barChart />
      </el-col>
      <el-col :lg="12" :md="24">
        <barChart1 />
      </el-col>
      <el-col :lg="12" :md="24">
        <circleChart />
      </el-col>
      <el-col :lg="12" :md="24">
        <mapChart />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import barChart from './barChart.vue'
import barChart1 from './barChart1.vue'
import circleChart from './circleChart.vue'
import mapChart from './mapChart.vue';
export default defineComponent({
  components: {
    barChart,
    barChart1,
    circleChart,
    mapChart
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  
</style>