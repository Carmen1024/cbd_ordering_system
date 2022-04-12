<!-- 手机密码登录 -->
<template>
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
    <el-button type="primary" :loading="loading" @click="submit" style="width: 100%;" size="medium">{{ $t('message.system.login') }}</el-button>
</template>

<script lang='ts'>
import { defineComponent,ref,reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import type { RouteLocationRaw  } from 'vue-router'
import { addRoutes } from '@/router'
import { ElMessage } from 'element-plus'

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
        const passwordType = ref('password')
        const passwordTypeChange = () => {
            passwordType.value === '' ? passwordType.value = 'password' : passwordType.value = ''
        }
        const loading = ref(false)
        const checkForm = () => {
            return new Promise((resolve, reject) => {
                const {name,password} = props.form
                if (name == '') {
                    ElMessage.warning({
                        message: '用户名不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if (password === '') {
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
            const {name,password} = props.form
            checkForm().then(() => {
                loading.value = true
                let params = {
                    name,
                    password
                }
                store.dispatch('user/login', params).then(async () => {
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
            passwordType,
            passwordTypeChange,
            submit,
            loading
        }
    },
})
</script>
<style lang='scss' scoped>
    @import './login.scss';
</style>