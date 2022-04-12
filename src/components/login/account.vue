<!-- 手机号验证码登录 -->
<template>
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
    <template #append>
        <el-button @click="sendCode" :disabled="sendDisabled" type="primary">
          {{sendMsg}}
        </el-button>
    </template>
    </el-input>
    <el-button type="primary" :loading="loading" @click="submit" style="width: 100%;" size="medium">{{ $t('message.system.login') }}</el-button>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import type { RouteLocationRaw  } from 'vue-router'
import { addRoutes } from '@/router'
import { ElMessage } from 'element-plus'
import { sendPhoneCode } from '@/api/user'

export default defineComponent({
    name: 'name',
    props:{
        form:{
            type:Object,
            default(){
                return {
                    name: '',
                    password: '',
                    verifyCode: '',
                }
            }
        }
    },
    setup(props){
        
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const sendDisabled=ref(false)

        const sendMsg = ref("发送验证码")
        const loading = ref(false)

        const timeCodeMsg=(time:any)=>{
          if(time<1){
            sendDisabled.value = false
            sendMsg.value="重新发送验证码"
            return
          }
          sendMsg.value = time + "s后重新获取"
          setTimeout(() => {
              timeCodeMsg(--time)
            }, 1000);
        }
        const sendCode=()=>{
          const {name:user_phone} = props.form
          const params={
            "eq":{user_phone}
          }
          sendPhoneCode(params).then(res=>{
            sendDisabled.value = true
            timeCodeMsg(60)
            store.commit("user/verificationCodeKeyChange",res.data)
            ElMessage({
              type: 'success',
              message: '验证码发送成功'
            })
          })
        }
        const checkForm = () => {
            return new Promise((resolve, reject) => {
                const {name,verifyCode} = props.form
                if (name == '') {
                    ElMessage.warning({
                        message: '用户名不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if (verifyCode === '') {
                    ElMessage.warning({
                        message: '验证码不能为空',
                        type: 'warning'
                    })
                    return;
                }
                resolve(true)
            })
        }
        const submit = () => {
            const {name,verifyCode} = props.form
            checkForm().then(() => {
                loading.value = true
                let params = {
                    name,
                    verificationCode:parseInt(verifyCode),
                    "verificationCodeKey":store.state.user.verificationCodeKey
                }
                store.dispatch('user/loginByCode', params).then(async () => {
                    ElMessage.success({
                        message: '登录成功',
                        type: 'success',
                        showClose: true,
                        duration: 1000
                    })
                    await addRoutes()
                    await router.push(route.query.redirect as RouteLocationRaw || '/')
                }).finally(() => {
                    loading.value = false
                })
            })
        }
            
        return{
          sendDisabled,
          sendCode,
          sendMsg,
          submit,
          loading
        }
    },
})
</script>
<style lang='scss' scoped>
    @import './login.scss';
</style>