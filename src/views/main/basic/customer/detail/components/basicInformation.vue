<template>
  <Form>
    <el-form-item label="客户编码">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="第三方编码">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="客户名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="联系人">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="客户区域">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="联系电话">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="客户地址">
      <el-select v-model="form.name" clearable placeholder="Select">
        <el-option
          v-for="item in materialStatusData"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="客户类型">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="客户状态">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="证照" style="width:100%;">
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
    </el-form-item>
    <el-form-item label="附件" style="width:100%;">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="form.fileList"
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
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item> -->
  </Form>
</template>

<script lang="ts">
import { defineComponent,reactive,ref } from 'vue'
import Form from '@/components/Form/index.vue';
import { unitData, materialTypeData, materialStatusData } from './../enum'
import type { UploadFile } from 'element-plus/es/components/upload/src/upload.type'
import { Plus } from '@element-plus/icons-vue'
export default defineComponent({
// do not use same name with ref
components:{
  Form,
  Plus
},
setup(){
  const fileList = ref<UploadFile[]>();
  const handleChange = (file: UploadFile, list: UploadFile[]) => {
        // fileList.value = fileList.value.slice(-3)
        fileList.value = list;
        console.log(file,list,fileList.value);
      }

      const dialogImageUrl = ref('')
      const dialogVisible = ref(false)

      const handleRemove = (file: UploadFile, fileList: UploadFile[]) => {
        console.log(file, fileList)
      }
      const handlePictureCardPreview = (file: UploadFile) => {
        dialogImageUrl.value = file.url!
        dialogVisible.value = true
      }
  const form = reactive({
      name: '',
      region: '',
      date1: '',
      date2: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
      radio:1,
      fileList,
      handleChange,
      handlePictureCardPreview,
      handleRemove,
      dialogImageUrl
  })

  const onSubmit = () => {
      console.log('submit!')
  }
  return{
      form,
      onSubmit,
      materialTypeData,
      materialStatusData
  }
}

})
</script>
<style lang="scss" scoped>
  
</style>
