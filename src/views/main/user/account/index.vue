<!--  -->
<template>
  <div class="layout-container">
    <div class="layout-container-panel">
        <div class="panel-title">
          我的账号
        </div>
        <div class="panel-content">
          <span class="iconfont icon-jiaose1"></span>
          <div class="">
              <div>{{user.user_name}}</div>
              <div>管理员</div>
          </div>
        </div>
    </div>
    <div class="layout-container-panel">
        <div class="panel-title">
          账号信息
        </div>
        <div class="panel-content">
          <span class="iconfont icon-password"></span>
          <div class="">
            <div>登录操作系统所需要的密码，6位以上数字和字母组合</div>
            <el-button type="text" @click="showPasswordLayer">修改密码</el-button>
            <password-layer :layer="layer" v-if="layer.show" />
          </div>
        </div>
        <!-- <div class="panel-content">
          <span class="iconfont icon-a-shoujihaoshouji"></span>
          <div class="">
            <div>绑定手机号可以用手机号登录</div>
            <el-button type="text">绑定手机</el-button>
          </div>
        </div> -->
        <div class="panel-content">
          <span class="iconfont icon-youxiang1"></span>
          <div class="">
            <div>
              <!-- 绑定邮箱号可以用邮箱账号登录  -->
              {{user.user_mail}}
            </div>
            <el-button type="text" @click="showELayer">绑定邮箱</el-button>
            <email-layer @resetMail="changeMail" :layer="eLayer" v-if="eLayer.show" />
          </div>
        </div>
    </div>
    <div class="layout-container-panel">
        <div class="panel-title">
          权限信息
        </div>
        <div class="panel-content">
          <!--  -->
          <el-checkbox-group v-model="role" size="large">
            <el-checkbox-button v-for="item in roleArr" :key="item" :label="item">
              {{ item }}
            </el-checkbox-button>
          </el-checkbox-group>
        </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import PasswordLayer from '@/components/login/passwordLayer.vue';
import EmailLayer from '@/components/login/emailLayer.vue';
export default defineComponent({
  name: 'account',
  components:{
    PasswordLayer,
    EmailLayer
  },
  setup(){
    const store = useStore()
    const user = reactive({...store.state.user.info})
    const role = ref(['IT管理员'])
    const roleArr = ['IT管理员', '财务', '出纳']
    const layer = reactive({
      title:'修改密码',
      show: false,
      showButtons: true,
      width:"30%"
    })
    const eLayer = reactive({
      show: false,
      showButton: true,
      width:"30%"
    })
    const showPasswordLayer = () => {
      layer.show = true
    }
    const showELayer = () => {
      eLayer.show = true
    }
    const changeMail=(mail:string)=>{
      user.user_mail = mail
      store.commit('infoChange', user)
    }
    return{
      role,
      roleArr,
      layer,
      eLayer,
      showPasswordLayer,
      showELayer,
      user,
      changeMail
    }
  },
})
</script>
<style lang='scss' scoped>
  .layout-container{
    &-panel{
      padding:10px;
      .panel-title{
        padding:10px;
        margin-bottom: 10px;
        background: var(--system-primary-bg-color);
        font-weight: bold;
      }
      .panel-content{
        padding:10px;
        line-height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items:flex-start;
        .iconfont{
          margin-right: 10px;
          width: 50px;
          line-height: 50px;
          text-align: center;
          border-radius: 50%;
          font-size: 30px;
          color:#fff;
          background:var(--system-primary-color);
        }
        .el-button{
          // margin-left: 20px;
        }
      }
    }
  }
</style>