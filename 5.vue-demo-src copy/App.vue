<template>
    <div class="App">
        <UserInfo
         :username="username"
         :age="age"
         :isoneline="isoneline"
         :car="car"
         :hobby="hobby"
         ></UserInfo>
    </div>
</template>

<script>
// import { turn } from 'core-js/core/array';
import UserInfo from './components/Other.vue'
export default {
    components: {
        UserInfo,
    },
    //    data
    data() {
        return {
            username: 'lily',
            age: 18,
            isoneline: true,
            car: {
                is_car: '长安',
            },
            hobby: ['篮球', '足球', '乒乓'],
        }
    }
}
</script>

<style></style>