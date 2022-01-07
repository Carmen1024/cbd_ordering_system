<template>
  <Form>
    <el-form-item label="物料描述" style="width:100%;">
      <el-input
        v-model="form.textarea"
        :rows="2"
        type="textarea"
        placeholder="Please input"
      />
    </el-form-item>
    <el-form-item label="品牌" style="width:33%;">
        <el-select v-model="form.region" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="产地" style="width:33%;">
        <el-select v-model="form.region" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="等级" style="width:33%;">
        <el-select v-model="form.region" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="物料主图" style="width:100%;">
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
    <el-form-item label="补充规则" style="width:100%;">
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
  import { defineComponent,reactive,ref,Ref } from 'vue'
  import Form from '@/components/Form/index.vue';
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
      // const handlePreview = (file: UploadFile) => {
      //   console.log(fileList.value,form.fileList)
      // }
      // const handleRemove = (file: UploadFile, newFileList: UploadFile[]) => {
      //   fileList.value = newFileList;
      //   console.log(file, newFileList)
      // }
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
        textarea: '',
        fileList, 
      })
      const onSubmit = () => {
          console.log('submit!')
      }
      return{
          fileList,
          form,
          onSubmit,
          handleChange,
          handlePictureCardPreview,
          handleRemove,
          dialogImageUrl
      }
    },
    methods:{
      // handleRemove(file: UploadFile, fileList: UploadFile[]){
      //   this.fileList = ref(fileList);
      //   console.log(fileList,this.fileList);
      // }
    }
  })
</script>
<style lang="scss" scoped>
  
</style>
