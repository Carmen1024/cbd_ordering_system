<!-- 地区选择器 -->
<template>
    <el-cascader
	  v-model="areaValue"	
      :options="options"
      :props="props"
      @change="handleChange"
    />
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'area',
  props:{
    areaGroup:{
      type: Array,
      default: () => {
          return ["","",""]
      }
    }
  },
  setup(prop,ctx){
	
	const store = useStore()
	const options = ref([])
	const props=ref({
		value:"name",
		label:"name"
	})
	console.log(prop.areaGroup)
	const areaValue = ref(prop.areaGroup)
	const areaList = store.state.area.areaList
	areaList.length>0 ? (options.value = areaList):init()
	function init(){
		store.dispatch('area/getArea').then(() => {
          options.value = store.state.area.areaList
        })
	}
	
	const handleChange = (value:any) => {
		console.log(value)
		ctx.emit("change",value)
	}
	return{
	  handleChange,
	  props,
	  options,
	  areaValue
	}
  },
})
</script>
<style lang='scss' scoped>
	.el-cascader{
		width: 100%;

	}
</style>