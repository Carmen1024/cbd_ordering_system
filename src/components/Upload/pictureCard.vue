<!--  -->
<template>
   <div class="upload">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :limit="1"
        >
          <el-icon><plus /></el-icon>
        </el-upload>
        <el-dialog v-model="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
    </div>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
import type { UploadFile } from 'element-plus/es/components/upload/src/upload.type'
import { Plus } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'name',
  components:{
    Plus
  },
  setup(){
    
    const dialogVisible = ref(false)

    const dialogImageUrl = ref('')

    const handlePictureCardPreview = (file: UploadFile) => {
      dialogImageUrl.value = file.url!
      dialogVisible.value = true
    }

    const handleRemove = (file: UploadFile, fileList: UploadFile[]) => {
      console.log(file, fileList)
    }

    return{
      dialogVisible,
      dialogImageUrl,
      handlePictureCardPreview,
      handleRemove
    }
  },
})
</script>
<style lang='scss' scoped>
 
</style>