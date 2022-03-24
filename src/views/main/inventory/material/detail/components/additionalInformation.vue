<template>
  <div class="formContainer">
    <el-form ref="additionalInformationForm" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="物料描述" style="width:100%;" prop="m_s_desc">
        <el-input
          v-model="form.m_s_desc"
          :rows="2"
          type="textarea"
          placeholder="请填写物料描述"
        />
      </el-form-item>
      <el-form-item label="品牌" style="width:33%;" prop="m_s_brand">
        <el-select v-model="form.m_s_brand" clearable placeholder="请选择物料类型">
          <el-option
            v-for="item in options.m_s_brand_data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="产地" style="width:33%;" prop="m_s_origin_place">
        <el-select v-model="form.m_s_origin_place" clearable placeholder="请选择物料类型">
          <el-option
            v-for="item in options.m_s_origin_place_data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="等级" style="width:33%;" prop="m_s_grade">
        <el-select v-model="form.m_s_grade" clearable placeholder="请选择物料类型">
          <el-option
            v-for="item in options.m_s_grade_data"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
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
    </el-form>
  </div>
  <div class="handle-container">
    <el-button type="primary" @click="onSubmit">保存</el-button>
  </div>
</template>

<script lang="ts">
  import { options } from './../../list/enum'
  import type { ElFormItemContext } from 'element-plus/lib/el-form/src/token'
  import { materialSupplementInsert,materialSupplementUpdate } from '@/api/material/material';
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
    props:{
      additionalInformation:{
        type: Object,
        default: () => {
          return {
            show: false,
            title:'',
            showButton:true
          }
        }
      }
    },
    setup(props){
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
      const additionalInformationForm: Ref<ElFormItemContext|null> = ref(null)
      const form = ref({
        "m_s_attachment_file": "",
        "m_s_grade": null,
        "m_s_desc": "",
        "m_s_origin_place": "",
        "m_s_main_picture": "",
        "m_s_brand": ""
      })
      const rules = reactive({
        // m_s_attachment_file: [{ required: true, message: '不可为空', trigger: 'blur' }],
        // m_s_grade: [{ required: true, message: '不可为空', trigger: 'blur' }],
        // m_s_desc: [{ required: true, message: '物料名称不可为空', trigger: 'blur' }],
        // m_s_origin_place: [{ required: true, message: '不可为空', trigger: 'change' }],
        // m_s_main_picture: [{ required: true, message: '不可为空', trigger: 'change' }],
        // m_s_brand: [{ required: true, message: '不可为空', trigger: 'change' }],
      });
      init()
      function init() { // 用于判断新增还是编辑功能
        if (props.additionalInformation.row) {
          form.value.m_id = props.additionalInformation.row._id // 数量量少的直接使用这个转
        } else {
          
        }
      }
      
      return{
          fileList,
          options,
          handleChange,
          handlePictureCardPreview,
          handleRemove,
          dialogImageUrl,
          form,
          rules,
          additionalInformationForm
      }
    },
    methods: {
      onSubmit() {
        if (this.additionalInformationForm) {
          this.additionalInformationForm.validate((valid) => {
            if (valid) {
              if (this.additionalInformation.row) {
                this.updateForm()
              } else {
                this.addForm()
              }
            } else {
              return false;
            }
          });
        }
      },
      // 新增提交事件
      addForm() {
        let params = this.form
        materialSupplementInsert(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.$emit('getNodeData', this.form,true)
        })
      },
      // 编辑提交事件
      updateForm() {
        let form = this.form;
        const { _id,m_s_attachment_file,m_s_grade,m_s_desc,m_s_origin_place,m_s_main_picture,m_s_brand} = form
        let params = {
          eq:{_id},
          set:{m_s_attachment_file,m_s_grade,m_s_desc,m_s_origin_place,m_s_main_picture,m_s_brand}
        }
        materialSupplementUpdate(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '编辑成功'
          })
          this.$emit('getNodeData', this.form,false)
        })
      }
    }
  })
</script>
<style lang="scss" scoped>
  
</style>
