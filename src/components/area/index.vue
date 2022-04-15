<!-- 地区选择器 -->
<template>
    <el-cascader
	  v-model="areaValue"	
      :options="options"
      :props="cascaderProps"
      @change="handleChange"
    />
</template>

<script lang='ts' setup>
	import { defineComponent,ref,reactive, computed, watch } from 'vue'
	import { useStore } from 'vuex'
	const props = defineProps({
		areaGroup:{
			type: Array,
			default: () => {
				return ['', '', '']
			}
		}
	})
	const emit = defineEmits(["change"])
	
	const store = useStore()
	const options = ref([])
	const cascaderProps=ref({
		value:"code",
		label:"name"
	})
	const areaValue = props.areaGroup
	options.value = store.state.area.areaList
	options.value.length==0 && init()
	// init()
	function init(){
		store.dispatch('area/getArea').then(() => {
          options.value = store.state.area.areaList
        })
	}
	
	const handleChange = (value:any) => {
		console.log(value)
		emit("change",value)
	}
</script>
<style lang='scss' scoped>
	.el-cascader{
		width: 100%;

	}
</style>