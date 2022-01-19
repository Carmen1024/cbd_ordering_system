<template>
  <Form>
    <el-form-item label="归属客户">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai"></el-option>
        <el-option label="Zone two" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="客户编码">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="财务主题编码">
      <el-input v-model="form.name"></el-input> 
    </el-form-item>
    <el-form-item label="订货需要审核">
        <el-select v-model="form.region" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
    </el-form-item>
    <el-form-item label="发票抬头">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="信控额度" style="width:25%;">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="返利额度" style="width:25%;">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="纳税人识别号">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="付款方式">
      <el-checkbox-group v-model="form.checkbox">
        <el-checkbox v-for="item in payData" :key="item.value" :label="item.label" />
      </el-checkbox-group>
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
