<template>
  <Form>
    <el-form-item label="法人主题编码">
      <el-input v-model="form.name" placeholder="财务系统法人主体编码（参考SAP系统）"></el-input>
    </el-form-item>
    <el-form-item label="纳税人识别号">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="财务主题编码">
      <el-input v-model="form.name"></el-input> 
    </el-form-item>
    <el-form-item label="发票信息">
      <el-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="发票信息录入：发票抬头，办公地址，电话，开户行信息等"
      />
    </el-form-item>
    <el-form-item label="备注信息">
      <el-input
        v-model="textarea"
        :rows="2"
        type="textarea"
        placeholder="请输入备注信息"
      />
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
  import { payData } from './../enum';
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
        checkbox:[1]
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
          dialogImageUrl,
          payData
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
