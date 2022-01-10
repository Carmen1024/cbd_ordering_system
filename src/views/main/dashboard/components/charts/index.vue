<template>
  <div>
    <barChart />
    <el-row :gutter="20">
      <el-col :lg="12" :md="24">
        <mapChart />
      </el-col>
      <el-col :lg="12" :md="24">
        <circleChart />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import barChart from './barChart.vue'
import circleChart from './circleChart.vue'
import mapChart from './mapChart.vue';
export default defineComponent({
  components: {
    barChart,
    circleChart,
    mapChart
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
  
</style>