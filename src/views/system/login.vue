<template>
  <div class="container" :style="{backgroundImage:'url('+bg+')'}">
    <div class="login-main">
      <h1>{{ $t(systemTitle) }}</h1>
      <div class="box">
        <div class="logo">
          <img src="@/assets/logo.png" alt="">
        </div>
        <el-form class="form">
          <el-input
            size="large"
            v-model="form.name"
            :placeholder="$t('message.system.userName')"
            type="text"
            maxlength="50"
          >
            <template #prepend>
              <i class="iconfont icon-userName"></i>
            </template>
          </el-input>
          <el-input
            size="large"
            ref="password"
            v-model="form.password"
            :type="passwordType"
            :placeholder="$t('message.system.password')"
            name="password"
            maxlength="50"
          >
            <template #prepend>
              <i class="iconfont icon-password"></i>
            </template>
            <template #append>
              <i class="iconfont" :class="passwordType ? 'icon-closeeye': 'icon-eye'" @click="passwordTypeChange"></i>
            </template>
          </el-input>
          <el-input
            size="large"
            v-model="form.verifyCode"
            :placeholder="$t('message.system.verifyCode')"
            type="text"
            maxlength="50"
          >
            <template #prepend>
              <i class="iconfont icon-verifyCode"></i>
            </template>
          </el-input>
          <el-button type="primary" :loading="form.loading" @click="submit" style="width: 100%;" size="medium">{{ $t('message.system.login') }}</el-button>
        </el-form>
        <!-- <div class="fixed-top-right">
          <select-lang />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { systemTitle } from '@/config'
import { defineComponent, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import type { RouteLocationRaw  } from 'vue-router'
import { addRoutes } from '@/router'
import { ElMessage } from 'element-plus'
import selectLang from '@/layout/Header/functionList/word.vue'
import bg from "@/assets/images/bg.png"
export default defineComponent({
  components: {
    selectLang
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const form = reactive({
      name: 'admin',
      password: '123456',
      verifyCode: '',
      loading: false
    })
    const passwordType = ref('password')
    const passwordTypeChange = () => {
      passwordType.value === '' ? passwordType.value = 'password' : passwordType.value = ''
    }
    const checkForm = () => {
      return new Promise((resolve, reject) => {
        if (form.name === '') {
          ElMessage.warning({
            message: '用户名不能为空',
            type: 'warning'
          });
          return;
        }
        if (form.password === '') {
          ElMessage.warning({
            message: '密码不能为空',
            type: 'warning'
          })
          return;
        }
        resolve(true)
      })
    }
    const submit = () => {
      checkForm()
      .then(() => {
        form.loading = true
        let params = {
          name: form.name,
          password: form.password
        }
        store.dispatch('user/login', params)
        .then(async () => {
          ElMessage.success({
            message: '登录成功',
            type: 'success',
            showClose: true,
            duration: 1000
          })
          await addRoutes()
          await router.push(route.query.redirect as RouteLocationRaw || '/')
        }).finally(() => {
          form.loading = false
        })
      })
    }
    return {
      systemTitle,
      form,
      passwordType,
      passwordTypeChange,
      submit,
      bg
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  // background-color: #eef0f3;
  background:no-repeat #eef0f3;
  background-size: cover;
  .login-main{
    position: absolute;
    width:600px;
    height: 400px;
    left: 50%;
    top: 50%;
    background: white;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    overflow: hidden;
    box-shadow: 0 6px 20px 5px rgba(152, 152, 152, 0.1),
      0 16px 24px 2px rgba(117, 117, 117, 0.14);
    h1 {
      padding: 0;
      margin: 0;
      text-align: center;
      line-height: 100px;
    }
    .box {
      width: 100%;
      height: 300px;
      display: flex;
      align-items:center;
      justify-content: center;
      .logo{  
        margin-left: 30px;
        width: 200px;
        height: 100%;
        display: flex;
        align-items:center;
        justify-content: center;
      }
      .form {
        margin: 0 30px;
        .el-input {
          margin-bottom: 20px;
        }
        .password-icon {
          cursor: pointer;
          color: #409eff;
        }
      }
      .fixed-top-right {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }
  }

}
@media screen and (max-width: 750px) {
  .container .box {
    width: 100vw;
    height: 100vh;
    box-shadow: none;
    left: 0;
    top: 0;
    transform: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      margin-top: 0;
    }
    .form {
    }
  }
}
</style>
