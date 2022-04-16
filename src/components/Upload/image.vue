<!--  -->
<template>
  <el-upload
    ref="upload"
    class="upload-demo"
    action="http://192.168.110.41:10000/fileManager/file/upload"
    :limit="1"
    :on-exceed="handleExceed"
  >
    <template #trigger>
      <el-button type="primary">select file</el-button>
    </template>
    <template #tip>
      <div class="el-upload__tip text-red">
        limit 1 file, new file will cover the old file
      </div>
    </template>
  </el-upload>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage , genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'


export default defineComponent({
  name: 'name',
  components:{
    Plus
  },
  props:{
    image:{
      type:String,
      default(){
        return ""
      }
    }
  },
  setup(props,cxt){
    
    const upload = ref<UploadInstance>()

    const handleExceed: UploadProps['onExceed'] = (files) => {
      console.log("files",files)
      upload.value!.clearFiles()
      const file = files[0] as UploadRawFile
      // file.uid = genFileId()
      upload.value!.handleStart(file)
      console.log("upload",upload.value)
    }

    return{
      upload,
      handleExceed,

    }
  },
})
</script>
<style lang='scss' scoped>
 
</style>