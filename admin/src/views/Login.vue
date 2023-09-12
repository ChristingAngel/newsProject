<template>
    <div>
        denglu
        <button @click="Login">login</button>
    </div>
</template>

<script setup>
const Login = ()=>{
    localStorage.setItem('token','aaa')
}

</script>

<style lang="scss" scoped>

</style>