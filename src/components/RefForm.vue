<template>
    <form action="">
        账号：<input type="text" v-model="username">
        密码：<input type="password" v-model="password">

    </form>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    }, methods: {
        getValues() {
            return {
                username: this.username,
                password: this.password
            }
        },
        resetValues() {
            this.username = '';
            this.password = '';

        }
    }
}
</script>

<style></style>