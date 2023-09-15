<template>
    <div>
        <vue-particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded"
            :options="options" />

        <div class="formCentainer">
            <h3>企业门户网站管理系统</h3>
            <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="loginRules" label-width="80px"
                class="loginfrom">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { reactive,ref } from 'vue';
import { loadFull } from 'tsparticles'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex';
import axios from 'axios'

const store = useStore()

const loginForm = reactive({
    username:'admin',
    password:'123456'
})

const loginFormRef = ref()
const particlesInit = async (engine) => {
    await loadFull(engine)
}

const loginRules = reactive({
    username:[
        {
            required: true, message: '请输入用户名', trigger: 'blur'
        }
    ],
    password:[
        {
            required: true, message: '请输入密码', trigger: 'blur'
        }
    ],
})

const router = useRouter()

//提交表单
const submitForm = ()=>{
    //校验表单 element内置方法
    loginFormRef.value.validate((valid)=>{
        // console.log(valid)
        if (valid) {
            // console.log(loginForm)
            axios.post('/adminapi/user/login',loginForm).then(res=>{
                console.log(res.data);
                if(res.data.ActionType == 'OK'){
                    console.log(res.data.data);
                    store.commit('changeUserInfo',res.data.data)
                    router.push('/index')
                }else{
                    ElMessage.error('用户名或密码错误')
                }
            }).catch(error=>{
                console.log(error);
            })
            
        }
    })
    //提交后台

    //设置token
    // localStorage.setItem('token', 'aaa')
}




//配置particles
const options = {
    background: {
        color: {
            value: '#9370DB'
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push'
            },
            onHover: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: '#ffffff'
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce'
            },
            random: false,
            speed: 6,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle'
        },
        size: {
            value: { min: 1, max: 5 },
        }
    },
    detectRetina: true
}
</script>

<style lang="scss" scoped>
.formCentainer{
    width: 500px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba($color: #000000, $alpha: 0.5);
    color: white;
    text-align: center;
    padding: 80px;
    h3{
        font-size: 30px;
    }
    .loginfrom{
        margin-top: 30px;
    }
}

::v-deep .el-form-item__label{
    color: white;
}
</style>