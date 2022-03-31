<!--  -->
<template>
   <div class="upload">
       <el-upload
          class="upload-demo"
          action="http://113.125.84.255:10000/g/fileManager/file/upload"
          :on-change="handleChange"
          :file-list="fileList"
          list-type="picture"
          :limit="10"
        >
          <el-button type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip">
              附件不超过10个，支持JPG、PNG、PDF格式
            </div>
          </template>
        </el-upload>
   </div>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
import type { UploadFile } from 'element-plus/es/components/upload/src/upload.type'

export default defineComponent({
  name: 'name',
  setup(){
    
    const fileList = ref<UploadFile[]>();
    const handleChange = (file: UploadFile, list: UploadFile[]) => {
        // fileList.value = fileList.value.slice(-3)
        fileList.value = list;
        console.log(file,list,fileList.value);
    }

    return{
      fileList,
      handleChange
    }
  },
})
</script>
<style lang='scss' scoped>
 
</style>