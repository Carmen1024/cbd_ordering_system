<!--  -->
<template>
   <div class="upload">
        <el-upload
          action="http://113.125.84.255:10007/fileManager/file/upload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="handleAvatarSuccess"
          :on-exceed="handleExceed"
          :limit="1"
        >
          <el-icon><plus /></el-icon>
        </el-upload>
        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="" />
        </el-dialog>
    </div>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
import type { UploadFile } from 'element-plus/es/components/upload/src/upload.type'
import { Plus } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import type { UploadProps, UploadUserFile } from 'element-plus'
import { ElMessage } from 'element-plus'


export default defineComponent({
  name: 'name',
  components:{
    Plus
  },
  setup(props,cxt){
    
    const store = useStore()
    const dialogVisible = ref(false)

    const imageUrl = ref('')

    const dialogImageUrl = ref('')

    const change = () => {
        cxt.emit("change",imageUrl.value)
    }

    const handlePictureCardPreview:UploadProps['onPreview'] = (file: UploadFile) => {
      console.log("点击文件列表中已上传的文件时的钩子",)
      dialogImageUrl.value = file.url!
      dialogVisible.value = true
    }

    const handleRemove: UploadProps['onRemove'] = (file: UploadFile, fileList: UploadFile[]) => {
      imageUrl.value = ''
      change()
    }
    const handleAvatarSuccess : UploadProps['onSuccess'] = (
      response,
      uploadFile
    ) => {
      const image = response.data.fileUrl.replace("nacos.cbd.com","http://113.125.84.255")
      imageUrl.value = image
      change()
    }

    const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
      ElMessage({
        type: 'error',
        message: '只能上传一张图片'
      })
    }

    const uploadUrl = store.state.app.uploadUrl

    return{
      dialogVisible,
      imageUrl,
      handlePictureCardPreview,
      handleRemove,
      uploadUrl,
      handleAvatarSuccess,
      dialogImageUrl,
      handleExceed
    }
  },
})
</script>
<style lang='scss' scoped>
 
</style>